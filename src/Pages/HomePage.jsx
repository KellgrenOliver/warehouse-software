import React from "react";
import styled from "@emotion/styled";
// import Inventory from "../Components/Inventory";
import Products from "../Components/Products";

const Container = styled.div({
  margin: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const HomePage = () => {
  return (
    <Container>
      {/* <Inventory /> */}
      <Products />
    </Container>
  );
};

export default HomePage;
