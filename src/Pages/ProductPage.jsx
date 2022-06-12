import styled from "@emotion/styled";
import React from "react";
import Product from "../Components/Product";
import BackArrow from "../Components/BackArrow";

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "1.5rem",
});

const ProductPage = () => {
  return (
    <Container>
      <BackArrow url={"/products"} />
      <Product />
    </Container>
  );
};

export default ProductPage;
