import { Divider, TextField } from "@mui/material";
import React from "react";

const RightBanner = () => {
  return (
    <div className="right_buy">
      <div className="cost_right">
        <h3>
          Your order is eligible for FREE Delivery.</h3>
          <span style={{ color: "gray" }}>
            Select this option at checkout. Details
          </span>
          <div className="itemDetails">
         <div className="subTotal">
         <div>Temporary amount</div>
         <div>1123</div>
         </div>
         <div className="subTotal">
         <div>Shipping</div>
         <div>Within 2 Days</div>
         </div>
          </div>
        <h3>
          Subtotal (1 item): <span style={{ fontWeight: "700" }}> $4013</span>
        </h3>
        <button className='rightbuy_btn'>Proceed To Buy</button>
        <Divider style={{marginTop:'1rem',fontWeight:'800'}}/>
        <div className="applyCoupon">
          <div className="applyText">Apply Coupon</div>
          <div className="applyField">
          <TextField className="inputField" size="small" variant="outlined" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default RightBanner;
