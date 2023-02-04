import React from 'react';
import { Divider } from '@mui/material';
import "./Buynow.css";
import Options from './Options';

const Buynow = () => {
  return (
    <div className='buynow_section'>
      <div className='buynow_container'>
        <div className='left_buy'>
           <h1>Shopping Cart</h1>
           <p>Select All Items</p>
           <span className='leftbuyprice'>Price</span>

           <Divider/>

           <div className='item_container'>
            <img src='https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70' alt='cart_img'></img>
            <div className='item_details'>
                <h3>Electric Kettle (1.5L, Silver, Black)</h3>
                <h3>Fitness Gear</h3>
                <h3 className='differentprice'>₹1139</h3>
                <p className='unusuall'>Usually dispatched in 8 days</p>
                <p>Eligible for free shipping</p>
                <Options/>
            </div>
            <h3 className='item_price'>₹1139</h3>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Buynow
