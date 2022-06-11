import React from "react";
import styled from "@emotion/styled";
import { useProductsContext } from "../Contexts/ProductsContext";
import Product from "./Product";

const Container = styled.div({
  width: "70%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
});

const Products = () => {
  const { data: productsData } = useProductsContext();
  return (
    <Container>
      {productsData?.products?.map((product) => (
        <Product product={product} key={product.product_id} />
      ))}
    </Container>
  );
};

export default Products;
