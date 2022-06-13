import React from "react";
import styled from "@emotion/styled";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const Button = styled.button({
  backgroundColor: "#1dbf6e",
  border: "none",
  color: "white",
  width: "fit-content",
  padding: "0.5rem 1.5rem",
  cursor: "pointer",
  marginTop: "1rem",
  borderRadius: "5px",
});

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header title={"The page you are looking for does not exist!"} />
      <Button onClick={() => navigate("/")}>Go back to home</Button>
    </Container>
  );
};

export default NotFoundPage;
