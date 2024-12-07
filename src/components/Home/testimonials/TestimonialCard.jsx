import { FaStar } from "react-icons/fa";
import LeftQuote from "./testimonialassets/quote.svg";
import { Slide } from "react-awesome-reveal";

const TestimonialCard = ({
  image,
  name,
  role,
  testimonialText,
  rating = "4.9",
}) => {
  return (
    <Slide triggerOnce direction="left">
      <div className="bg-white text-black w-[90%] pb-4 mx-auto sm:w-[400px] sm:h-[300px] rounded-2xl shadow-[0_0_15px_-6px_black] m-2">
        <div className="flex items-center justify-evenly p-8">
          <div className="w-[70px] h-[70px] bg-gray-500 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={name}
            />
          </div>
          <div className="ml-2 text-left">
            <h4 className="m-0">{name}</h4>
            <p className="text-sm">{role}</p>
          </div>
          <div className="ml-auto flex items-center justify-center gap-1">
            <h1 className="text-lg font-semibold">{rating}</h1>
            <FaStar size={25} color="orange" />
          </div>
        </div>
        <div className="text-justify px-2">
          <p className="text-sm px-4">{testimonialText}</p>
        </div>
      </div>
    </Slide>
  );
};

export default TestimonialCard;
