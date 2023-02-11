import { Divider } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";
import "./cart.css";

const Cart = () => {
  return (
    <>
      <Navbar showNavbar={true} />
      <div className="cart_section">
        <div className="cart_container">
          <div className="left_cart">
            <img
              src="https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70"
              alt="cart_img"
            />
            <div className='cart_btn'>
            <button class="button type1">Buy Now</button>
            </div>
          </div>
          <div className="right_cart">
            <h3>Fitness Gear</h3>
            <h4>Electric Kettle (1.5L, Silver, Black)</h4>
            <Divider />
            <p className=" mrp">M.R.P. : ₹1139</p>
            <p>
              Deal Of The Day : <span style={{ color: "#B12704" }}>₹625</span>
            </p>
            <p>
              You Save : <span style={{ color: "#B12704" }}>₹570 (47%)</span>
            </p>
            <div className="discount_box">
              <h5>
                Discount : <span style={{ color: "#111" }}>Extra 10% Off</span>
              </h5>
              <h4>
                Free Delivery :
                <span style={{ color: "#111", fontWeight: 600 }}>
                  {" "}
                  Oct 8 - Oct 21{" "}
                </span>{" "}
                Details
              </h4>
              <p>
                Fastest Delivery :
                <span style={{ color: "#111", fontWeight: 600 }}>
                  {" "}
                  Tomorrow 11 AM
                </span>
              </p>
            </div>
            <p className="description">
              <span
                style={{
                  color: "#565959",
                  fontWeight: 500,
                  fontSize: 14,
                  letterSpacing: "0.4px",
                }}
              >
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </span>
            </p>
            <div className="cart_btn">
              
              <button class="button type1">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
