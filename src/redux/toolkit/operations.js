import fetchGoods from "../../service/api";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const initGoodsOperations = createAsyncThunk(
  "geyOfGoods",
  async (_, thunkAPI) => {
    try {
      const { data } = await fetchGoods();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
