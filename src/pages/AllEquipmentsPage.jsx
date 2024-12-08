import React from "react";
import Header from "../shared/Header";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import EquipmentSingleRow from "../components/Home/allEquipments/EquipmentSingleRow";

const AllEquipmentsPage = () => {
  const products = useLoaderData();
  if (!products) {
    return <Header text={"No Products Found"} />;
  }

  return (
    <div className=" w-[95%] lg:w-[80%] mx-auto my-20">
      <Header text={"Check All the Products We Have"} />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return <EquipmentSingleRow key={product._id} product={product} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipmentsPage;
