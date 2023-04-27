import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    cart:[]
}

const cartSlice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
     setUserCart: (state,action)=>{
        state.cart = action.payload.cart
     },
     setUserCartUpdate: (state,action)=>{
      const updatedCart = [...state.cart,...action.payload.cartUpdate]
      state.cart= updatedCart
   }
  }
})

export const { setUserCart,setUserCartUpdate } = cartSlice.actions
const cartReducer = cartSlice.reducer

export default cartReducer
