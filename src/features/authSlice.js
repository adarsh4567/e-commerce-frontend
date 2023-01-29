import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username:"",
    password:"",
    email:""
}

export const userDetailsSlice = createSlice({
    name:'details',
    initialState,
    reducers:{
        setSignData: (state,action)=>{
            state.username= action.payload.username
            state.password= action.payload.password
        },
        setSignUpData: (state,action)=>{
            state.username= action.payload.username;
            state.email= action.payload.email;
            state.password=action.payload.password
        }

    }
})

export const {setSignData,setSignUpData}=userDetailsSlice.actions;

export const userDetailState = (state)=> state.userDetailsSlice

export default userDetailsSlice.reducer