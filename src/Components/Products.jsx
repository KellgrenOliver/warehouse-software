import React from "react";
import styled from "@emotion/styled";
import { useProductsContext } from "../Contexts/ProductsContext";
import { useNavigate } from "react-router-dom";

const Container = styled.div({
  width: "70%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
});

const ProductWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "1.5rem",
  cursor: "pointer",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const Img = styled.img({
  width: "250px",
  height: "250px",
  borderRadius: "5px",
});

const Products = () => {
  const { data: productsData } = useProductsContext();
  const navigate = useNavigate();

  return (
    <Container>
      {productsData?.products?.map((product) => (
        <ProductWrapper
          product={product}
          key={product.product_id}
          onClick={() => navigate(`/${product?.product_id}`)}
        >
          <Img src={product?.image} alt="product" />
          <div>{product?.name}</div>
          <div>{product?.price}:-</div>
        </ProductWrapper>
      ))}
    </Container>
  );
};

export default Products;
