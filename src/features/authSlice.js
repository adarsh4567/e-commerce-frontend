import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name:"",
    email:"",
    token:[]
  },
  reducers: {
     setUserDetails: (state,action)=>{
        state.name = action.payload.name
        state.email = action.payload.email
        state.token = action.payload.token
     }
  }
})

export const { setUserDetails } = userSlice.actions

export default userSlice.reducer
