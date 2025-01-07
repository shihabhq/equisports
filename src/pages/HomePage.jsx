import React from "react";
import SlidersContainer from "../components/Home/SlidersContainer";
import SportsCategoryHome from "../components/Home/sportcategory/SportsCategoryHome";
import Testimonials from "../components/Home/testimonials/Testimonials";
import NewsLetter from "../components/Home/NewsLetter";
import ProductsHome from "../components/Home/ProductsHome";
import News from "../components/Home/news/News";

const HomePage = () => {
  return (
    <div>
      <SlidersContainer />
      <ProductsHome />
      <SportsCategoryHome />
      <Testimonials />
      <News />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
