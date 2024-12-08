import React, { useEffect, useState } from "react";

const useFetch = (url, email) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}?useremail=${email}`);
        const data = await response.json();
        if (response.ok) {
          setProducts(data);
        } 
      } catch (error) {
        setError("No Products Found to Show", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [email, url]);

  return {
    products,
    loading,
    error,
  };
};

export default useFetch;
