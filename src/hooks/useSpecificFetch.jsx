import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSpecificFetch = (url) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:5000/product-details/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [setProduct, id]);

  return {
    loading,
    product,
  };
};

export default useSpecificFetch;
