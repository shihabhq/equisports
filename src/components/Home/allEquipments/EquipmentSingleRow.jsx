import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const EquipmentSingleRow = ({ product }) => {
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

      <td className="px-6 py-4">
        <Link
          to={`/product-details/${_id}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default EquipmentSingleRow;
