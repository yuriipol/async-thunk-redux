import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterCartReducer } from "./reducer";
import cartReducer from "./toolkit/slice";
import allGoods from "./toolkit/sliceAllGoods";

const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
};

const combreducer = combineReducers({
  cart: cartReducer,
  cartAll: allGoods,
});

export const persistedReducer = persistReducer(persistConfig, combreducer);
