import React, { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const useProductsContext = () => {
  return useContext(ProductsContext);
};

const ProductsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const getData = () => {
    const savedData = localStorage.getItem("Products");
    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
      fetch("products.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          setData(myJson?.products);
          localStorage.setItem("Products", JSON.stringify(myJson?.products));
        });
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const values = {
    data,
  };

  return (
    <ProductsContext.Provider value={values}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export { useProductsContext, ProductsContextProvider as default };
