import React from "react";
import "../../sass/__navbar.scss";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  let wishlist = useSelector((s) => s.heart.value);
  return (
    <div className="navbar__wrapper">
      <div className="container">
        <div className="navbar__section">
          <div className="navbar__links">
            <NavLink to={"/"}>Home</NavLink>
            <div>
              <span>{wishlist.length}</span>
              <NavLink to={"/wishlist"}>Wishlist</NavLink>
            </div>
            <NavLink to={"/contact"}>Contact us</NavLink>
          </div>
          <div className="navbar__logo">
            <NavLink to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="navbar__search">
            <a href="#">About Us</a>
            <div>
              <input type="text" placeholder="Search Product" />
              <img src={search} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
