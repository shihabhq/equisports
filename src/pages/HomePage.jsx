import React from "react";
import SlidersContainer from "../components/Home/SlidersContainer";
import SportsCategoryHome from "../components/Home/sportcategory/SportsCategoryHome";
import Testimonials from "../components/Home/testimonials/Testimonials";
import NewsLetter from "../components/Home/NewsLetter";
import { useLoaderData } from "react-router-dom";
import ProductsHome from "../components/Home/ProductsHome";

const HomePage = () => {
  const products = useLoaderData()
  console.log(products.length)
  return (
    <div>
      <SlidersContainer />
      <ProductsHome products={products} />
      <SportsCategoryHome />
      <Testimonials />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
