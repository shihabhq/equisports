import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import EquipmentSingleRow from "../components/Home/allEquipments/EquipmentSingleRow";
import ProductCard from "../shared/ProductCard";
import Loading from "../shared/Loading";

const AllEquipmentsPage = () => {

  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState(products);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const response = await fetch(
        "https://server-pi-lilac-98.vercel.app/all-products"
      );
      const products = await response.json();
      setProducts(products);
      setLoading(false);
    };
    fetchProducts();
  }, []);
  useEffect(()=>{setSortedProducts(products)},[products])

  if (loading) {
    return <Loading />;
  }

  if (!products) {
    return <Header text={"No Products Found"} />;
  }
  const handleSortByPrice = () => {
    const sorted = [...sortedProducts];
    sorted.sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  };

  return (
    <div className=" w-[95%] lg:w-[80%] mx-auto my-20">
      <Header text={"Check All the Products We Have"} />
      <div className="flex items-center justify-start my-4">
        <button
          onClick={handleSortByPrice}
          className="btn btn-primary text-base">
          Sort Price
        </button>
      </div>
      <div className="relative mt-8 overflow-x-auto shadow-md sm:rounded-lg">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {sortedProducts.map((product) => {
            return (
              <ProductCard
                products={products}
                key={product?._id}
                _id={product?._id}
                description={product?.description}
                image={product?.image}
                isPrivate={false}
                itemName={product?.productName}
                price={product?.price}
                rating={product?.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllEquipmentsPage;
