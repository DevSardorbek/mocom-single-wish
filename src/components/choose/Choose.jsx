import React from "react";
import "../../sass/__choose.scss";
import line from "../../assets/line.png";
import chard1 from "../../assets/chard1.png";
import chard2 from "../../assets/chard2.png";
import chard3 from "../../assets/chard3.png";

const Choose = () => {
  return (
    <div className="choose__wrapper">
      <div className="container">
        <div className="choose__title">
          <img src={line} alt="" />
          <p>Why Choose US</p>
        </div>
        <div className="choose__section-cards">
          <div className="choose__section-card">
            <img src={chard1} alt="" />
            <h2>Fast Delivery</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="choose__section-card">
            <img src={chard2} alt="" />
            <h2>Cheap Price</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="choose__section-card">
            <img src={chard3} alt="" />
            <h2>Premium Quality</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
