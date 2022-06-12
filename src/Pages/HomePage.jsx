import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

const CardWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem",
  marginTop: "3rem",
});

const Card = styled.div(({ imageUrl }) => {
  return {
    backgroundImage: `url("${imageUrl}")`,
    backgroundPosition: "bottom",
    objectFit: "center",
    width: "400px",
    height: "400px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
    cursor: "pointer",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  };
});

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header title={"Warehouse Software"} />
      <CardWrapper>
        <Card
          imageUrl={"https://i.insider.com/5c868d1b26289838f40fb2cd?width=700"}
          onClick={() => navigate("/inventory")}
        >
          INVENTORY
        </Card>
        <Card
          imageUrl={
            "https://www.ikea.com/images/an-ikea-ekebol-sofa-tingby-side-table-and-tertial-lamp-in-a--1ec4df57d515a9b753d448ded860d452.jpg"
          }
          onClick={() => navigate("/products")}
        >
          PRODUCTS
        </Card>
      </CardWrapper>
    </>
  );
};

export default HomePage;
