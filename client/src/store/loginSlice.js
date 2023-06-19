import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
};

export const loginSlice = createSlice({
  name: "check Login",
  initialState,
  reducers: {
    checkSignIn: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.isLoggedIn = action.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { checkSignIn } = loginSlice.actions;

export default loginSlice.reducer;
