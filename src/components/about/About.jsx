import React from "react";
import line from "../../assets/line.png";
import "../../sass/__about.scss";
import aboutImg1 from "../../assets/aboutImg1.png";
import aboutImg2 from "../../assets/aboutImg2.png";
import aboutbg from "../../assets/aboutbg.png";

const About = () => {
  return (
    <div className="about__wrapper">
      <div className="container">
        <div className="about__section-title">
          <img src={line} alt="" />
          <h4>about us</h4>
          <h3>
            If you’re looking for a Premium Quality Tempered Glass or Back-cover
            for your Device{" "}
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. 
          </p>
        </div>
        <div className="about__section-items">
          <img src={aboutImg1} alt="" />
        </div>
        <div className="about__section-cards">
          <div className="about__section-info">
            <div className="about__section_info-one">
              <h2>Shop Premium Tempered Glass in wholesale Price !</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.  LKR : 299
              </p>
              <button>Shop Tempered Glass </button>
            </div>
            <div className="about__section_info-two">
              <img src={aboutImg2} alt="" />
            </div>
          </div>
          <div className="about__section-img">
            <img src={aboutbg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
