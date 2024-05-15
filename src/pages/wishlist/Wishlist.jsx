import React from "react";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import Empty from "../../components/empty/Empty";

const Wishlist = () => {
  let wishlist = useSelector((state) => state?.heart?.value);
  console.log("wish", wishlist);

  return (
    <div className="wishlist">
      {wishlist.length ? (
        <Products title="Sevimlilar" data={wishlist} />
      ) : (
        <Empty text="Wishlist" />
      )}
    </div>
  );
};

export default Wishlist;
