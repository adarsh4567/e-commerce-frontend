import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/authSlice'



export const store = configureStore({
    reducer:{
        userReducer
    },
})