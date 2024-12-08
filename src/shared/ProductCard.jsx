import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";

const ProductCard = ({
  _id,
  isPrivate,
  description,
  itemName,
  image,
  price,
  rating,
  products,
  setProducts,
}) => {
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-pi-lilac-98.vercel.app/delete-product/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const newProducts = products.filter(
                (product) => product._id !== _id
              );
              setProducts(newProducts);
            }
          });
      }
    });
  };

  return (
    <div className="card card-compact bg-base-100 w-[100%] max-w-96 shadow-xl justify-center mx-auto">
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
          <h3 className="font-semibold text-xl flex items-center">
            {" "}
            <FaStar /> {rating}
          </h3>
        </div>
        <div className="card-actions justify-start grid grid-cols-2 mt-4 w-[95%] mx-auto">
          {isPrivate && (
            <>
              <Link
                to={`/product-update/${_id}`}
                className="btn text-base btn-success text-white">
                update
              </Link>
              <button
                className="btn text-base btn-error text-white"
                onClick={() => handleDelete(_id)}>
                Delete
              </button>
            </>
          )}
          <Link
            to={`/product-details/${_id}`}
            className="btn btn-info col-span-2 text-white text-base">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
