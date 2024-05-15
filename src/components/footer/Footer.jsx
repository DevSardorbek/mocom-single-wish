import React from "react";
import "../../sass/__footer.scss";
import flogo from "../../assets/fLogo.png";
import media1 from "../../assets/media1.png";
import media3 from "../../assets/media3.png";
import media4 from "../../assets/media4.png";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="container">
        <div className="footer__section">
          <div className="footer__section-logo">
            <img src={flogo} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="footer__section-contact">
            <h4>Contact us</h4>
            <p>E: info@example.com</p>
            <p>P: +94 7670000000</p>
            <p>A: 123 Hospital rd,</p>
            <p>Kalubowila, Dehiwela</p>
          </div>
          <div className="footer__section-useful">
            <h4>Useful links</h4>
            <p>Shop All</p>
            <p>Tempered Glass</p>
            <p>Back-cover</p>
            <p>About Us</p>
          </div>
          <div className="footer__section-media">
            <div className="media1">
              <img src={media1} alt="" />
              <p>Whatsapp</p>
            </div>
            <div className="media1">
              <img src={media4} alt="" />
              <p>Facebook</p>
            </div>
            <div className="media1">
              <img src={media3} alt="" />
              <p>Instagram</p>
            </div>
            <div className="media1">
              <img src={media4} alt="" />
              <p>TIk Tok</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
