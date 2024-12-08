import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSpecificFetch = (url) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          setError("No Product Found To display");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);

      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  }, [setProduct, url]);

  return {
    loading,
    product,
    error,
  };
};

export default useSpecificFetch;
