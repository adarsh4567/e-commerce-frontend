
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../../helper/dummy_data";
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

const Slide = ({ title, isFirstSlide }) => {
  return (
    <div className="product_section">
      <div className="product_deal">
        <h3> {title} </h3>
        <button className="view_btn"> View All</button>
      </div>
      <hr style={{color:'black'}}/>
    <div className="carousel-content">
      <Carousel
        swipeable={true}
        draggable={false}
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
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item"
        containerClass="carousel-container"
      >
        {products.map((e) => {
          return (
            <div className="product_items">
              <div className="product_img">
                <img src={e.url} alt="productitem" />
              </div>
              <p className="product_name">{e.title.shortTitle}</p>
              <p className="product_offer">{e.discount}</p>
              <p className="product_explore">{e.tagline}</p>
            </div>
          );
        })}
      </Carousel>
      </div>
    </div>
  );
};

export default Slide;
