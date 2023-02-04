import { Divider } from '@mui/material';
import { fontSize, fontWeight } from '@mui/system';
import React from 'react';
import "./cart.css";

const Cart = () => {
  return (
    <div className='cart_section'>
      <div className='cart_container'>
        <div className='left_cart'>
            <img src='https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70' alt='cart_img'/>
            <div className='cart_btn'>
                <button className='cart_btn1'>Add To Cart</button>
                <button className='cart_btn2'>Buy Now</button>
            </div>
        </div>
        <div className='right_cart'>
          <h3>Fitness Gear</h3>
          <h4>Electric Kettle (1.5L, Silver, Black)</h4>

          <Divider/>
          
          <p className=' mrp'>M.R.P. : ₹1139</p>
          <p>Deal Of The Day : <span style={{color: "#B12704" }}>₹625</span></p>
          <p>You Save : <span style={{color: "#B12704"}}>₹570 (47%)</span></p>

          <div className="discount_box">
            <h5>Discount : <span style={{color: "#111"}}>Extra 10% Off</span></h5>
            <h4>Free Delivery :<span style={{color:"#111" ,fontWeight:600}}> Oct 8 - Oct 21 </span> Details</h4>
            <p>Fastest Delivery :<span style={{color: "#111" ,fontWeight:600}}> Tomorrow 11 AM</span></p>
          </div>
          <p className='description'>About The Item : <span style={{color: "#565959" ,fontWeight:500, fontSize: 14, letterSpacing:"0.4px"}}>about items ncndvkndc, mvnnkjvnfdncv,mn fkjnvcknmvnk nknkfdvn cbbvcnkdxz jfdsbhv </span></p>
        </div>
      </div>
    </div>
  )
}

export default Cart
