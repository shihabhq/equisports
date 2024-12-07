const SingleCategoryCard = ({ image, text }) => {
  return (
    <div className="cursor-pointer transition-all hover:-translate-y-1 text-center">
      <img src={image} className="w-full" alt="" />
      <h2 className="text-xl font-semibold uppercase mt-4">{text}</h2>
    </div>
  );
};

export default SingleCategoryCard;
