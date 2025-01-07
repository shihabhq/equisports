import { Fade } from "react-awesome-reveal";
import sneaker from "../../../assets/sneaker.png";
import { keyframes } from "@emotion/react";

const upDownAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const SneakerSlider = () => {
  return (
    <div className="w-full h-[70vh] bg-gradient-to-r from-orange-400 to-yellow-600">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 w-[95%] mx-auto lg:w-[80%] h-full">
        <div className="basis-2/5 content-center">
          <h1 className="text-4xl lg:text-6xl text-white font-bold">
            Limited Fancy <br /> Sneakers available
          </h1>
          <button className="mt-4 btn btn-white text-xl">Buy Now</button>
        </div>
        <div className="basis-1/2">
          <Fade
            keyframes={upDownAnimation}
            duration={2000}
            triggerOnce={false}
            style={{ animationIterationCount: "infinite" }}>
            <img className="w-full" src={sneaker} alt="" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SneakerSlider;
