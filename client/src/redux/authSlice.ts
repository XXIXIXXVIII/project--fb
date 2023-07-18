import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import publicAxios from "../fetchConfig/publicAxios";
import privateAxios from "../fetchConfig/privateAxios";
export interface StateCurrentUser {
  currentUser:{
    id?:number,
    avatar?: string,
    firstName?:string,
    lastName?:string,
    role?:string
    coverImage?:string
  }
  isFetching:boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error:any,
}

const initialState : StateCurrentUser = {
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


      .addCase(loginPage.pending,(state)=>{
        state.isFetching = true
        state.error = null
      })
      .addCase(loginPage.fulfilled,(state, action)=>{
        state.currentUser = action.payload
        state.isFetching = false
        state.error = null
      })


      .addCase(avartaRedux.fulfilled,(state, action)=>{
        state.currentUser.avatar = action.payload
      })

      .addCase(coverImgRedux.fulfilled,(state, action)=>{
        state.currentUser.coverImage = action.payload
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

export const loginPage = createAsyncThunk('auth/loginPage', async ({pageId}:{pageId:number})=>{
  try {
    const result = await privateAxios.get(`page/${pageId}`)
    return result.data
  } catch (error) {
    console.log(error);
  }
})

export const avartaRedux = createAsyncThunk('update/avarta',({avarta}:{avarta:string})=>{
  return avarta
})

export const coverImgRedux = createAsyncThunk('update/coverImg',({coverImg}:{coverImg:string})=>{
  return coverImg
})

export const resetAuthRedux = createAsyncThunk("auth/resetAuthRedux", () => {
  return
});
export const logoutRedux = createAsyncThunk("auth/logout", () => {
  return
});

export default authSlice.reducer;
