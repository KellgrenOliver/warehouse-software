import React from "react";
import styled from "@emotion/styled";
import Products from "../Components/Products";
import Header from "../Components/Header";
import BackArrow from "../Components/BackArrow";

const ProductsWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  width: "70%",
  margin: "3rem auto",
});

const ProductsPage = () => {
  return (
    <>
      <Header title={"Products"} />
      <BackArrow url={"/"} />
      <ProductsWrapper>
        <Products />
      </ProductsWrapper>
    </>
  );
};

export default ProductsPage;
