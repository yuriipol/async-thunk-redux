import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "allGoods",
  initialState: [],

  reducers: {
    initAllGoods: (state, { payload }) => {
      return payload;
    },
  },
});

export const { initAllGoods } = cartSlice.actions;

export default cartSlice.reducer;
