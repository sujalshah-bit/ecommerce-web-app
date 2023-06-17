import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: [],
  count: 0,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
          
      state.count += 1;
      state.value.push(action.payload)
    
    },
    removeFromCart: (state ,action) => {
      state.count -= 1;
      const indexItem = state.value.findIndex((item)=>item.id === action.payload )
      state.value.splice(indexItem,1)
    },
    // incrementByAmount: (state, action) => {
    //   state.count += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

// this is for dispatch
// export const { addTodo } = todoSlice.actions;

// // this is for configureStore
// export default todoSlice.reducer;
// export const todoSlice = createSlice({
//   name: 'todos',
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {

//       state.push(todo);
//   },
// })
