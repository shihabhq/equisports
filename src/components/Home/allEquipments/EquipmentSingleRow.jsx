import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swal } from "sweetalert2/dist/sweetalert2";

const EquipmentSingleRow = ({ products, product, setProducts }) => {
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
  const { productName, category, price, rating, _id } = product;
  return (
    <tr className="bg-white border-b text-black dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {productName}
      </th>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4">{rating}</td>
      <td className="px-6 py-4">${price}</td>

      <td className="px-6 py-4 flex gap-4 items-center">
        <Link
          to={`/product-details/${_id}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          View Details
        </Link>
        <Link
          to={`/product-update/${_id}`}
          className=" text-base btn-success text-success hover:underline">
          update
        </Link>
        <button
          className="text-base text-red-500 hover:underline" 
          onClick={() => handleDelete(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default EquipmentSingleRow;
