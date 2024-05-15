import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailProductQuery } from "../../context/productApi";
import "../../sass/__singleRoute.scss";

const SingleRoute = () => {
  const { id } = useParams();
  const { data } = useGetDetailProductQuery(id);
  console.log("single", data);
  return (
    <div className="single_route">
      <div className="container">
        <div className="single_card">
          <img
            style={{ width: "500px" }}
            src={data?.images && data.images[0]}
            alt=""
          />
          <div className="mini_img">
            <img src={data?.images && data.images[1]} alt="" />
            <img src={data?.images && data.images[2]} alt="" />
            <img src={data?.images && data.images[3]} alt="" />
          </div>
          <div className="single_card_info">
            <h1>{data?.category}</h1>
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
            <div className="buy">
              <span>${data?.price}</span>
              {/* <button>
                <BiSolidShoppingBag />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;
