import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./toolkit/cart-slice";
import allGoods from "./toolkit/sliceAllGoods";
import { errorSlice } from "./toolkit/error-slice";
import { loadingSlice } from "./toolkit/loading-slice";

const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
};

const combreducer = combineReducers({
  cart: cartReducer,
  cartAll: allGoods,
  error: errorSlice.reducer,
  loading: loadingSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, combreducer);
