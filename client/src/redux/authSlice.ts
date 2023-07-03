import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import publicAxios from "../fetchConfig/publicAxios";

interface State {
  currentUser:{
    avatar?: string,
    firstName?:string,
    lastName?:string
  }
  isFetching:boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error:any,
}

const initialState : State = {
  currentUser:{},
  isFetching: false,
  error: null,
}

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loginRedux.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(loginRedux.fulfilled, (state, actions) => {
        state.currentUser = actions.payload;
      })
      .addCase(loginRedux.rejected, (state, actions) => {
        console.log(actions.error.message);
        state.isFetching = false
        state.error = actions.error.message;
      })

      .addCase(signupRedux.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(signupRedux.fulfilled, (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
      })
      .addCase(signupRedux.rejected, (state) => {
        
        state.error = undefined;
      })
      .addCase(logoutRedux.fulfilled,(state)=>{
        state.currentUser = {}
        state.isFetching = false
        state.error = null
      })
      .addCase(resetAuthRedux.fulfilled,(state)=>{
        state.isFetching = false
        state.error = null
      })
});

export const loginRedux = createAsyncThunk(
  "auth/login",
  async ({ gmail, password }: { gmail: string; password: string }) => {
    console.log( gmail, password);
    try {
      const result = await publicAxios.post("/auth/login", { gmail, password });
      const data = result.data;
      localStorage.setItem("jwtToken", JSON.stringify(data.accessToken));
      return data.user;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      if(error.response.data.message[0]!=="E"){
        throw new Error(error.response.data.message[0])
      }else{
        throw new Error(error.response.data.message)
      }
    }
  }
);

export const signupRedux = createAsyncThunk(
  "auth/signup",
  async ({
    firstName,
    lastName,
    gmail,
    birthday,
    password,
    sex,
  }: {
    firstName: string;
    lastName: string;
    gmail: string;
    birthday: string;
    password: string;
    sex: string;
  }) => {
    try {
      const result = await publicAxios.post("/auth/signup", {
        firstName,
        lastName,
        gmail,
        birthday,
        password,
        sex,
      });
      console.log(result);
      localStorage.setItem("jwtToken", JSON.stringify(result.data.accessToken));
      return result.data.user;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.log(error.response.data.message);
    }
    
  }
);

export const resetAuthRedux = createAsyncThunk("auth/resetAuthRedux", () => {
  return
});
export const logoutRedux = createAsyncThunk("auth/logout", () => {
  return
});

export default authSlice.reducer;
