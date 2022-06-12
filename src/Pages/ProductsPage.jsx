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
  margin: "1rem auto",
  "@media screen and (min-width: 600px)": {
    margin: "3rem auto",
    width: "95%",
  },
  "@media screen and (min-width: 768px)": {
    width: "90%",
  },
  "@media screen and (min-width: 1024px)": {
    width: "80%",
  },
  "@media screen and (min-width: 1224px)": {
    width: "70%",
  },
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
