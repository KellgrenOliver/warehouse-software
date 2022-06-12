import React from "react";
import styled from "@emotion/styled";
import { useProductsContext } from "../Contexts/ProductsContext";
import { useNavigate } from "react-router-dom";

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

const InfoWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  margin: "1rem auto",
});

const Products = () => {
  const { data: productsData } = useProductsContext();
  const navigate = useNavigate();

  console.log(productsData);

  return (
    <>
      {productsData?.map((product) => (
        <ProductWrapper
          key={product.product_id}
          onClick={() => navigate(`/products/${product?.product_id}`)}
        >
          <Img src={product?.image} alt="product" />
          <InfoWrapper>
            <div>{product?.name}</div>
            <b>{product?.price}:-</b>
          </InfoWrapper>
        </ProductWrapper>
      ))}
    </>
  );
};

export default Products;
