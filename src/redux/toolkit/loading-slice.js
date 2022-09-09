import { createSlice } from "@reduxjs/toolkit";
import { initGoodsOperations } from "./operations";

export const loadingSlice = createSlice({
  name: "loding",
  initialState: false,
  extraReducers: {
    [initGoodsOperations.pending]: () => true,
    [initGoodsOperations.fulfilled]: () => false,
    [initGoodsOperations.rejected]: () => false,
  },
});
