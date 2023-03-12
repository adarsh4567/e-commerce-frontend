
import { Divider } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useFetchProducts } from "../../customHooks/productsHook";


import "./slide.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ title, isFirstSlide,isProductPage}) => {
  const {data,isLoading} = useFetchProducts();
  return (
    <div className={!isProductPage ? "product_section":"productPage"}>
      <div className="product_deal">
        <div className={!isProductPage ? 'title':'productTitle'}> {title} </div>
      </div>
      <Divider/>
      {!isLoading && <div className="carousel-content">
      <Carousel
        showDots={false}
        responsive={
          isFirstSlide
            ? {
                desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 4,
                },
              }
            : responsive
        }
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item"
        containerClass="carousel-container"
      >
        {data?.map((e) => {
          return (
            <Link  to={`/getproductsone/${e.id}`} target={!isProductPage ? '':'_blank'}>
            <div key={e.id}  className="product_items">
              <div className="product_img">
                <img src={e.url} alt="productitem" />
              </div>
              <p className="product_name">{e.title.shortTitle}</p>
              <p className="product_offer">{e.discount}</p>
              <p className="product_explore">{e.tagline}</p>
            </div>
            </Link>
          );
        })}
      </Carousel>
      </div>}
    </div>
  );
};

export default Slide;
