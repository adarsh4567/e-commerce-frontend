import React from "react";
import Banner from "../Banner/Banner";
import "./mainComponent.css";
import Slide from "../slide/slide";
import { SubBannerImages } from "../../helper/dummy_data";

const MainComponent = () => {
  return (
    <>
      <div className="home_section">
        <div className="banner_part">
          <Banner />
        </div>
        <div className="slide_part">
          <div className="left_slide">
            <Slide isFirstSlide={true} title="Deal Of The Day" />
          </div>
          <div className="right_slide">
            <h4>50-60% Off on Shoes</h4>
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80"
              alt="rightimg"
            ></img>
            <h4>Festival Latest Launch</h4>
          </div>
        </div>
        <Slide title="Today's Deal" />
        <div className="center_img">
          <Banner subBannerImages={SubBannerImages} isSubBanner={true} />
        </div>
        <Slide title="Best Seller" />
        <Slide title="Upto 80% off" />
      </div>
    </>
  );
};

export default MainComponent;
