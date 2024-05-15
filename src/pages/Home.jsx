import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import About from "../components/about/About";
import Choose from "../components/choose/Choose";
import Footer from "../components/footer/Footer";
import Products from "../components/products/Products";
import { api } from "../context/api";
import { useGetProductsQuery } from "../context/productApi";
import Loading from "../components/loading/Loading";

const Home = () => {
  let { data, isLoading, error, isError } = useGetProductsQuery();
  console.log(data?.products);
  return (
    <div>
      <Banner />
      {isLoading ? <Loading /> : <></>}
      <Products data={data?.products} />
      <About />
      <Choose />
      <Footer />
    </div>
  );
};

export default Home;
