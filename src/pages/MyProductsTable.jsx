import React, { useContext, useEffect, useState } from "react";
import Header from "../shared/Header";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../contexts/AuthProvider";
import Loading from "../shared/Loading";
import { Link } from "react-router-dom";
import ProductCard from "../shared/ProductCard";

import "sweetalert2/src/sweetalert2.scss";
import EquipmentSingleRow from "../components/Home/allEquipments/EquipmentSingleRow";

const MyProductsTable = () => {
  const { user } = useContext(AuthContext);
  const {
    products: initialProducts,
    loading,
    error,
  } = useFetch("https://server-pi-lilac-98.vercel.app/my-products", user.email);
  const [products, setProducts] = useState(initialProducts || []);

  useEffect(() => {
    setProducts(initialProducts || []);
  }, [initialProducts]);

  if (loading) {
    return <Loading />;
  }
  if (error || products.length === 0) {
    return (
      <div className="flex flex-col gap-8 items-center my-20 justify-center">
        <Header text={`You Don't have any Product Added`} />
        <Link to={"/add-product"} className="btn btn-black text-lg">
          Add Products
        </Link>
      </div>
    );
  }

  return (
    <div className="my-40 mx-auto w-[95%] lg:w-[80%] ">
      <Header text={"Your added Products:"} />
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
              return (
                <EquipmentSingleRow
                  products={products}
                  setProducts={setProducts}
                  key={product._id}
                  product={product}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProductsTable;
