import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from '../features/authSlice'


export const store = configureStore({
    reducer:{
        userDetailsReducer
    },
})