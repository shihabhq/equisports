import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSpecificFetch = (url) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [setProduct, url]);

  return {
    loading,
    product,
  };
};

export default useSpecificFetch;
