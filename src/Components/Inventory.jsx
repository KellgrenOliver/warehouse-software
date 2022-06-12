import React from "react";
import styled from "@emotion/styled";
import { useInventoryContext } from "../Contexts/InventoryContext";
import Article from "./Article";

const ArticleWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "1.5rem auto",
  padding: "1rem",
  backgroundColor: "#373c4a",
  width: "250px",
  borderRadius: "10px",
});

const Products = () => {
  const { data: inventoryData } = useInventoryContext();

  return (
    <>
      {inventoryData?.map((article) => (
        <ArticleWrapper key={article.art_id}>
          <Article article={article} />
        </ArticleWrapper>
      ))}
    </>
  );
};

export default Products;
