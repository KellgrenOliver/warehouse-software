import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

const CardWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  marginTop: "3rem",
  flexDirection: "column",
  "@media screen and (min-width: 768px)": {
    gap: "3rem",
    flexDirection: "column",
  },
  "@media screen and (min-width: 1024px)": {
    flexDirection: "row",
  },
});

const Card = styled.div({
  backgroundColor: "#40445c",
  width: "85%",
  height: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2.5rem",
  cursor: "pointer",
  transition: "transform 0.3s",
  borderRadius: "5px",
  "&:hover": {
    transform: "scale(1.1)",
  },
  "@media screen and (min-width: 600px)": {
    fontSize: "3rem",
    width: "60%",
    height: "200px",
  },
  "@media screen and (min-width: 768px)": {
    fontSize: "4rem",
    width: "70%",
  },
  "@media screen and (min-width: 1024px)": {
    width: "35%",
  },
});

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header title={"Warehouse Software"} />
      <CardWrapper>
        <Card onClick={() => navigate("/inventory")}>INVENTORY</Card>
        <Card onClick={() => navigate("/products")}>PRODUCTS</Card>
      </CardWrapper>
    </>
  );
};

export default HomePage;
