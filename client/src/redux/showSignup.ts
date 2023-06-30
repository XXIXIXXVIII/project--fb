import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface State {
  showSignup: boolean | undefined;
}

const initialState: State = {
  showSignup: undefined,
};

const showSignupSlice = createSlice({
  name: "showSignup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(showSignupRedux.fulfilled, (state, action) => {
      state.showSignup = action.payload;
    });
  },
});

export const showSignupRedux = createAsyncThunk(
  "showSign",
  ({ showSignup }: { showSignup: boolean | undefined }) => {
    return showSignup;
  }
);

export default showSignupSlice.reducer;
