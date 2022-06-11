import React from "react";
import { useProductsContext } from "../Contexts/ProductsContext";

const Products = () => {
  const { products } = useProductsContext();
  console.log("Products", products);
  return <div>Products</div>;
};

export default Products;
