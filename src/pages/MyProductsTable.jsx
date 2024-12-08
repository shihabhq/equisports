import React, { useContext, useEffect, useState } from "react";
import Header from "../shared/Header";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../contexts/AuthProvider";
import Loading from "../shared/Loading";
import { Link } from "react-router-dom";
import ProductCard from "../shared/ProductCard";

import "sweetalert2/src/sweetalert2.scss";

const MyProductsTable = () => {
  const { user } = useContext(AuthContext);
  const { products:initialProducts, loading, error } = useFetch(
    "http://localhost:5000/my-products",
    user.email
  );
  const [products, setProducts] = useState(initialProducts || []);
  
  useEffect(() => {
    setProducts(initialProducts || [])
  },[initialProducts])

  if (loading) {
    return <Loading />;
  }
  if (error || products.length === 0) {
    return (
      <div className="flex flex-col gap-8 items-center my-20 justify-center">
        <Header text={`You didn't add any product`} />
        <Link to={"/add-product"} className="btn btn-black text-lg">
          Add Products
        </Link>
      </div>
    );
  }

  return (
    <div className="my-40 mx-auto w-[95%] lg:w-[80%] ">
      <Header text={"Your added Products:"} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {products?.map((product) => {
          return (
            <ProductCard
              products={products}
              setProducts={setProducts}
              key={product?._id}
              _id={product?._id}
              description={product?.description}
              image={product?.image}
              isPrivate={true}
              itemName={product?.productName}
              price={product?.price}
              rating={product?.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyProductsTable;
