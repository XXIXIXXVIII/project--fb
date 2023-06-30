import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import publicAxios from "../fetchConfig/publicAxios";

interface State {
  currentUser:{
    avatar?: string,
    firstName?:string,
    lastName?:string
  }
  isFetching:boolean,
  error:boolean|string|[],
}

const initialState : State = {
  currentUser:{},
  isFetching: false,
  error: false,
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
      .addCase(loginRedux.rejected, (state) => {
        state.error = true;
      })
      .addCase(signupRedux.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(signupRedux.fulfilled, (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
      })
      .addCase(signupRedux.rejected, (state) => {
        state.error = true;
      })
      .addCase(logoutRedux.fulfilled,(state)=>{
        state.currentUser = {}
        state.isFetching = false
        state.error = false
      })
});

export const loginRedux = createAsyncThunk(
  "auth/login",
  async ({ gmail, password }: { gmail: string; password: string }) => {
    try {
      const result = await publicAxios.post("/auth/login", { gmail, password });
      const data = result.data;
      localStorage.setItem("jwtToken", JSON.stringify(data.accessToken));
      return data.user;
    } catch (error) {
      console.log(error);
      return error;
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
      localStorage.setItem("jwtToken", JSON.stringify(result.data.accessToken));
      return result.data.user;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.log(error.response.data.message);
    }
    
  }
);

export const logoutRedux = createAsyncThunk("auth/logout", () => {
  return
});

export default authSlice.reducer;
