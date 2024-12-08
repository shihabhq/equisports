import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { FaBox, FaClock, FaStar } from "react-icons/fa";
import Loading from "../shared/Loading";
import useSpecificFetch from "../hooks/useSpecificFetch";
import NotFound from "../layouts/NotFound";
import Header from "../shared/Header";

const ViewDetails = () => {
  const { id } = useParams();
  const { product, loading, error } = useSpecificFetch(
    `https://server-pi-lilac-98.vercel.app/product-details/${id}`
  );

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Header text={error} />;
  }

  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 h-96 md:h-auto">
            <img
              src={product?.image}
              alt={product?.productName}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-4">{product?.productName}</h2>
            <p className="text-gray-600 mb-4">{product?.category}</p>
            <p className="text-xl font-semibold mb-4">
              Price:${product?.price}
            </p>

            <div className="flex items-center mb-4">
              <h1 className="text-xl font-bold">Rating:</h1>
              <span className="ml-2 text-gray-600 text-xl font-semibold">
                {product?.rating}
              </span>
            </div>

            <p className="text-gray-700 mb-6">{product?.description}</p>

            <div className="mb-4 flex items-center gap-2">
              <h3 className="font-semibold"> Customization: </h3>
              <p className="font-medium"> {` ${product?.customization}`}</p>
            </div>

            <div className="flex items-center mb-4">
              <FaClock className="mr-2 text-gray-600" />
              <span>Processing Time: {product?.processTime}</span>
            </div>

            <div className="flex items-center mb-6">
              <FaBox className="mr-2 text-gray-600" />
              <span>Stock Status: {product?.stock} available</span>
            </div>

            <button className="btn btn-primary text-white tex-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
