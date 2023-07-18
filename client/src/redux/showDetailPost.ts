import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface State {
  postId: number;
}

const initialState: State = {
  postId: 0,
};

const showDetailPost = createSlice({
  name: "showDetailPost",
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(showPost.fulfilled, (state, action) => {
      state.postId = action.payload;
    });
    builder.addCase(hidePost.fulfilled, (state, action) => {
      state.postId = action.payload;
    });
  },
});

export const showPost = createAsyncThunk(
  "showPost",
  ({ postId }: { postId: number }) => {
    return postId;
  }
);

export const hidePost = createAsyncThunk(
  "hidePost",
  () => {
    return 0;
  }
);

export default showDetailPost.reducer;
