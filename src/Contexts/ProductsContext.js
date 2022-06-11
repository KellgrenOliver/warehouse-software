import React, { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const useProductsContext = () => {
  return useContext(ProductsContext);
};

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
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
        setProducts(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const values = {
    products,
  };

  return (
    <ProductsContext.Provider value={values}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export { useProductsContext, ProductsContextProvider as default };
