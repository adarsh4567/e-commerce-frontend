import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name:"",
    email:"",
    userId:"",
    token:[]
  },
  reducers: {
     setUserDetails: (state,action)=>{
        state.name = action.payload.name
        state.email = action.payload.email
        state.token = action.payload.token
        state.userId = action.payload.userId
     }
  }
})

export const { setUserDetails } = userSlice.actions
const userReducer = userSlice.reducer

export default userReducer
