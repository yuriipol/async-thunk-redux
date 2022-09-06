import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { carts: [] },
  reducers: {
    addProduct: (state, action) => {
      //   return [...state, action.payload];
      state.carts.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.carts = state.carts.filter(
        (element) => element.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
