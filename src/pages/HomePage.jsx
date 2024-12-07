import React from "react";
import SlidersContainer from "../components/Home/SlidersContainer";
import SportsCategoryHome from "../components/Home/sportcategory/SportsCategoryHome";
import Testimonials from "../components/Home/testimonials/Testimonials";
import NewsLetter from "../components/Home/NewsLetter";

const HomePage = () => {
  return (
    <div>
      <SlidersContainer />
      <SportsCategoryHome />
      <Testimonials />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
