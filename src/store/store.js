import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/authSlice'
import cartReducer from '../features/cartSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";

  const persistConfig = { key: "root", storage, version: 1 };
  const persistedReducer = persistReducer(persistConfig,combineReducers({
    userReducer,
    cartReducer
  }));


export const store = configureStore({
    reducer: persistedReducer,
})