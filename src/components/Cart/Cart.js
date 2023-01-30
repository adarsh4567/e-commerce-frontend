import React from 'react';
import "./cart.css";

const Cart = () => {
  return (
    <div className='cart_section'>
      <div className='cart_container'>
        <div className='left_cart'>
            <img src='' alt='' />
            <div className='cart_btn'>
                <button className='cart_btn1'>Add To Cart</button>
                <button className='cart_btn2'>Buy Now</button>
            </div>
        </div>
        <div className='right_cart'>

        </div>
      </div>
    </div>
  )
}

export default Cart
