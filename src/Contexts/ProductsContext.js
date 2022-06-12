import React, { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const useProductsContext = () => {
  return useContext(ProductsContext);
};

const ProductsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const getData = () => {
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
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const values = {
    data,
    setData,
  };

  return (
    <ProductsContext.Provider value={values}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export { useProductsContext, ProductsContextProvider as default };
