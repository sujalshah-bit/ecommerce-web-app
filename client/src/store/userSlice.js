import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state._id = action.payload._id;
      state.name = action.payload.name;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;

export default userSlice.reducer;
