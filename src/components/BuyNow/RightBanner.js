import React from "react";

const RightBanner = () => {
  return (
    <div className="right_buy">
      {/* <img src=''/>  later  */}
      <div className="cost_right">
        <p>
          Your order is eligible for FREE Delivery.   </p> <br />
          <span style={{ color: "#565959" }}>
            Select this option at checkout. Details
          </span>
     
        <h3>
          Subtotal (1 item): <span style={{ fontWeight: "700" }}> $4013</span>
        </h3>
        <button className='rightbuy_btn'>Proceed To Buy</button>
      </div>
    </div>
  );
};

export default RightBanner;
