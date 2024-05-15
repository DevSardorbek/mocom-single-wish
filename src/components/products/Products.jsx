import React from "react";
import "../../sass/__products.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useGetDetailProductQuery } from "../../context/productApi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/heartSlice";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Products = ({ data }) => {
  let wishlist = useSelector((state) => state.heart.value);
  let dispatch = useDispatch();
  const product = data?.map((item) => (
    <div key={item.id} data-aos="zoom-in-up" className="product__card">
      <div className="card_img">
        <button onClick={() => dispatch(toggleHeart(item))}>
          {wishlist?.some((el) => el.id === item.id) ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <Link to={`/product/${item.id}`}>
          <img src={item.images[0]} alt="" />
        </Link>
      </div>
      <h3>{item.title}</h3>
      <h4>${item.price}</h4>
    </div>
  ));

  return (
    <div className="products__wrapper">
      <div className="container">
        <div className="products__cards">{product}</div>
      </div>
    </div>
  );
};

export default Products;
