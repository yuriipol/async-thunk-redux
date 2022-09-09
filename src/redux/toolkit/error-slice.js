import { createSlice } from "@reduxjs/toolkit";
import { initGoodsOperations } from "./operations";

export const errorSlice = createSlice({
  name: "error",
  initialState: null,
  extraReducers: {
    [initGoodsOperations.rejected]: (_, { payload }) => {
      return payload;
    },
    [initGoodsOperations.pending]: () => null,
  },
});
