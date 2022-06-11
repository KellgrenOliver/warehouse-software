import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Container = styled.div({
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

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container onClick={() => navigate(`/${product?.product_id}`)}>
        <Img src={product?.image} alt="product" />
        <div>{product?.name}</div>
        <div>{product?.price}:-</div>
      </Container>
      {/* <button onClick={() => }>BUY</button> */}
    </>
  );
};

export default Product;
