import { MdLocalOffer } from "react-icons/md";
import React, { useEffect } from "react";
import { useFetchOneProduct } from "../../customHooks/productsHook";
import Navbar from "../Navbar/Navbar";
import "./cart.css";
import { useParams } from "react-router-dom";
import Slide from "../slide/slide";

const offerData = [
  "Bank Offer5% Cashback on  State Bank India CardT&C",
  "Buy this Product and Get Extra ₹500 Off on Bikes & ScootersT&C",
  "Partner OfferSign up for Buy now Pay Later and get our Gift Card worth up to ₹1000*",
  "No cost Emi options are available"

]

const Cart = () => {  
  const {id} = useParams()
  const {data} = useFetchOneProduct(id)
  useEffect(()=>{
   window.scrollTo(0,0)
  },[])
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
            <button class="button type1">Add To Cart</button>
            </div>
          </div>
          <div className="right_cart">
            <div className="short">{data?.title?.shortTitle}</div>
            <div className="long">{data?.title?.longTitle}</div>
            <div className="mrp">M.R.P. :{`₹${data?.price?.mrp}`}</div>
            <h3>
              Deal Of The Day : <span style={{ color: "#B12704" }}>{`₹${data?.price?.cost}`}</span>
            </h3>
            <div>
              You Save : <span style={{ color: "#B12704" }}>{`₹${data?.price?.mrp-data?.price?.cost}`}</span>
            </div>
            <div className="offers">
               <div className="offer_head">Available offers</div>
               {offerData.map((item)=><>
                <div className="offer_item">
                  <div><MdLocalOffer style={{color:'brown',marginRight:'3px',fontSize:'20px'}}/></div>
                  <div>{item}</div>
                </div>
               </>)}
            </div>
            <div className="discount_box">
              <h5>
                Discount : <span style={{ color: "#111" }}>{data?.price?.discount}</span>
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
          </div>
        </div>
        <Slide title='More products' isProductPage={true}/>
      </div>
    </>
  );
};

export default Cart;
