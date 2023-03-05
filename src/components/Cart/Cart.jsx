import { Divider } from "@mui/material";
import React from "react";
import { useFetchOneProduct } from "../../customHooks/productsHook";
import Navbar from "../Navbar/Navbar";
import "./cart.css";
import { useParams } from "react-router-dom";
import Slide from "../slide/slide";

const Cart = () => {  
  const {id} = useParams()
  const {data} = useFetchOneProduct(id)

  return (
    <>
      <div className="cart_section">
       <Navbar showNavbar={true} />
        <div className="cart_container">
          <div className="left_cart">
            <img
              src={data?.url}
              alt="cart_img"
            />
            <div className='cart_btn'>
            <button class="button type1">Buy Now</button>
            </div>
          </div>
          <div className="right_cart">
            <div className="short">{data?.title?.shortTitle}</div>
            <div className="long">{data?.title?.longTitle}</div>
            <Divider />
            <p className=" mrp">M.R.P. : ₹1139</p>
            <p>
              Deal Of The Day : <span style={{ color: "#B12704" }}>{`₹${data?.price?.mrp}`}</span>
            </p>
            <p>
              You Save : <span style={{ color: "#B12704" }}>{`₹${data?.price?.cost}`}</span>
            </p>
            <div className="discount_box">
              <h5>
                Discount : <span style={{ color: "#111" }}>{data?.discount}</span>
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
                {data?.description}
              </span>
            </p>
            <div className="cart_btn">
              <button class="button type1">Add To Cart</button>
            </div>
          </div>
        </div>
        <Slide title='More products' isProductPage={true}/>
      </div>
    </>
  );
};

export default Cart;
