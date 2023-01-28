import React from "react";
import Banner from "../Banner/Banner";
import "./mainComponent.css";
import Slide from "../slide/slide";
import Navbar from "../Navbar/Navbar";

const MainComponent = () => {
  return (
    <>
      <div className="home_section">
        <div className="banner_part">
          <Navbar />
          <Banner />
        </div>
        <div className="center-product">
          <main>
            <div className="subHead">
              <h1>
                <span className="word">
                  Unlimited Range of Shoe<span class="superscript">s</span>{" "}
                </span>
                <span className="word">By Nike</span>
              </h1>
            </div>
            <div className="content">
              <div className="card-container">
                <div className="card-face face-1">
                  <div className="top-part">
                    <div className="logo hide">
                      <img
                        src="https://raw.githubusercontent.com/sefyudem/3D-Product-Card/main/img/logo.png"
                        alt="Nike Logo"
                      />
                    </div>
                    <h2 className="hide">Nike revolution 5</h2>
                    <div className="shoe-info">
                      <span className="shoe-new hide">New</span>
                      <span className="shoe-year hide">2021</span>
                    </div>
                  </div>

                  <div className="bottom-part">
                    <h2 className="shoe-price hide">
                      <span>₹</span>13000.00
                    </h2>
                    <div className="right-arrow hide">
                      <img
                        src="https://raw.githubusercontent.com/sefyudem/3D-Product-Card/main/img/right-arrow.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="card-face face-2">
                  <div className="top-part">
                    <div className="header">
                      <h3 className="heading hide">Epic shoes</h3>
                      <a className="wish hide">
                        <i class="far fa-heart"></i>
                      </a>
                    </div>
                    <ul className="features hide">
                      <li>Smooth & Fast.</li>
                      <li>Lightweight & Breathable Support.</li>
                      <li>Best For Running.</li>
                    </ul>
                    <div className="color-wrap hide">
                      <span>Color :</span>
                      <div className="colors">
                        <span className="color blue active"></span>
                        <span className="color black"></span>
                        <span className="color white"></span>
                      </div>
                    </div>
                  </div>

                  <div className="buy-wrap">
                    <a href="#" className="buy hide">
                      Add to cart <i class="fas fa-shopping-cart"></i>
                    </a>
                  </div>
                </div>

                <div className="shoe-image-wrapper">
                  <div className="shoe-img">
                    <img
                      src="https://raw.githubusercontent.com/sefyudem/3D-Product-Card/main/img/nike.png"
                      alt="Nike shoe"
                      class="shoe"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="slide_part">
          <div className="left_slide">
            <Slide isFirstSlide={true} title="Deal Of The Day" />
          </div>
          <div className="right_slide">
            <h4>50% Off on Headphones</h4>
            <img
              src="https://images.philips.com/is/image/PhilipsConsumer/TASH402BL_00-IMS-en_GH?$jpglarge$&wid=960"
              alt="rightimg"
            ></img>
          </div>
        </div>
        <Slide title="Today's Deal" />
        <div className="center_img">
          {/* <Banner subBannerImages={SubBannerImages} isSubBanner={true} /> */}
        </div>
        <Slide title="Best Seller" />
        <Slide title="Upto 80% off" />
      </div>
    </>
  );
};

export default MainComponent;
