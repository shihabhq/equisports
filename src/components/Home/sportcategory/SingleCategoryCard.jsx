import { Fade } from "react-awesome-reveal";

const SingleCategoryCard = ({ image, text, delay }) => {
  return (
    <Fade direction="up" delay={delay}>
      <div className="cursor-pointer transition-all hover:-translate-y-1 text-center">
        <img src={image} className="w-full" alt="" />
        <h2 className="text-xl font-semibold uppercase mt-4">{text}</h2>
      </div>
    </Fade>
  );
};

export default SingleCategoryCard;
