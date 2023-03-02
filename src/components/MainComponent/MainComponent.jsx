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
                  Unlimited Range of HeadPhone
                </span>
                <span className="word">By Headzone</span>
              </h1>
            </div>
              <div class="card">
                <div class="float-dots">
                  <div>
                    <span>30% OFF</span>
                  </div>
                  <div>
                    <span>₹3000</span>
                  </div>
                  <div></div>
                </div>
                <div class="title">
                  <h1>White Headset</h1>
                </div>

                <div class="image"></div>

                <div class="card-footer">
                  <span>₹3000</span>

                  <a href="" class="btn-buy">
                    buy now
                  </a>
                </div>
                <div class="hover-infos">
                  <span class="type">Gamer Headset</span>
                  <span class="brand">Razer</span>
                  <span class="prizes">
                    <i>$</i>Buy and win prizes!
                  </span>
                </div>

                <div class="yellow-circle">
                  <div></div>
                </div>

                <div class="purple-circle">
                  <div></div>
                </div>

                <div class="hover-arrow-left">
                  <img src="img/arrow-left.svg" alt="" />
                </div>

                <div class="hover-arrow-right">
                  <img src="img/arrow-right.svg" alt="" />
                </div>
              </div>
          </main>
        </div>
        <Slide title="Today's Deal" />
        <Slide title="Best Seller" />
        <Slide title="Upto 80% off" />
      </div>
      )
    </>
  );
};

export default MainComponent;
