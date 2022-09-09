import { createSlice } from "@reduxjs/toolkit";
import { initGoodsOperations } from "./operations";

const cartSlice = createSlice({
  name: "allGoods",
  initialState: [],

  extraReducers: {
    [initGoodsOperations.fulfilled]: (_, { payload }) => {
      return payload;
    },
  },
});

export default cartSlice.reducer;
