import React from "react";
import "../../sass/__banner.scss";
import bannerImg from "../../assets/bannerImg.png";
const Banner = () => {
  return (
    <div className="banner__wrapper">
      <div className="container">
        <div className="banner__section">
          <div className="banner__section-info">
            <h4>Mobile</h4>
            <h3>Backcover</h3>
            <h2>Tempered Glass</h2>
            <button>Shop all !</button>
          </div>
          <div className="banner__section-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
