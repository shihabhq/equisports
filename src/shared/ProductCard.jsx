import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({
  isPrivate,
  description,
  itemName,
  image,
  price,
  rating,
}) => {
  return (
    <div className="card card-compact bg-base-100 max-w-96 shadow-xl justify-center mx-auto">
      <figure>
        <div className="w-[250px] h-[250px] overflow-hidden rounded-lg">
          <img className="w-full h-full object-cover" src={image} />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{itemName}</h2>
        <p className="text-base">{description.slice(0, 120)}.....</p>
        <div className="flex items-center justify-start gap-8 mb-2">
          <h3 className="font-semibold text-xl">Price:${price}</h3>
          <h3 className="font-semibold text-xl flex items-center"> <FaStar /> {rating}</h3>
        </div>
        <div className="card-actions justify-start grid grid-cols-2 mt-4 w-[95%] mx-auto">
          
          {isPrivate && (
            <>
              <button className="btn text-base btn-success text-white">update</button>
              <button className="btn text-base btn-error text-white">Delete</button>
            </>
          )}
          <button className="btn btn-info col-span-2 text-base">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
