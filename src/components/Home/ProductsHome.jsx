import React, { useEffect, useState } from "react";
import Header from "../../shared/Header";
import ProductCard from "../../shared/ProductCard";
import Loading from "../../shared/Loading";

const ProductsHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const response = await fetch(
        "https://server-pi-lilac-98.vercel.app/home-products"
      );
      const products = await response.json();
      setProducts(products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className=" w-[95%] lg:w-[80%] mx-auto my-24">
      <div className="">
        <Header text={"Featured Products"} />
      </div>
      {loading && <Loading />}
      {products && products.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => {
            return (
              <ProductCard
                _id={product?._id}
                key={product?._id}
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
      ) : loading ? (
        <Loading />
      ) : (
        <div>
          <h1 className="my-8 text-4xl font-bold text center">
            No Product found
          </h1>
        </div>
      )}
    </div>
  );
};

export default ProductsHome;
