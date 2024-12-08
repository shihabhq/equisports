import React from "react";
import Header from "../../shared/Header";
import ProductCard from "../../shared/ProductCard";

const ProductsHome = ({ products }) => {
  return (
    <div className=" w-[95%] lg:w-[80%] mx-auto">
      <div className="my-40">
        <Header text={"Featured Products"} />
      </div>
      {products && products.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            return (
              <ProductCard
                key={product?.id}
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
      ) : (
        <div>
          <h1 className="my-8 text-4xl font-bold">No Product found</h1>
        </div>
      )}
    </div>
  );
};

export default ProductsHome;
