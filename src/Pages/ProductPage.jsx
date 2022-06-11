import styled from "@emotion/styled";
import React from "react";
import Product from "../Components/Product";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "1.5rem",
});

const BackArrow = styled(FontAwesomeIcon)({
  fontSize: "2rem",
  color: "white",
  position: "absolute",
  top: 15,
  left: 15,
  cursor: "pointer",
});

const ProductPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackArrow icon={faArrowLeft} onClick={() => navigate("/")} />
      <Product />
    </Container>
  );
};

export default ProductPage;
