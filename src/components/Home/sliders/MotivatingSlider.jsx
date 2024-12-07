import "./slider.css";

import discountBanner from "../../../assets/discountbanner.jpg";

const MotivatingSlider = () => {
  return (
    <div
      className="motivating-slide text-center flex flex-col items-center justify-center gap-6 h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${discountBanner})` }}>
      <h1 className="text-3xl tablet:text-5xl font-bold text-white">
        Get Started to build up the Real you
      </h1>
      <h2 className="text-xl tablet:text-3xl text-white">
        With More Than 60% Offer
      </h2>
      <a className="btn btn-outline mt-4 px-6 py-2  font-semibold rounded-md text-white hover:bg-white hover:text-black">
        View More
      </a>
    </div>
  );
};

export default MotivatingSlider;
