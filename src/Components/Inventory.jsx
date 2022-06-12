import React from "react";
import styled from "@emotion/styled";
import { useInventoryContext } from "../Contexts/InventoryContext";
import Article from "./Article";

const ArticleWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "1.5rem",
});

const Products = () => {
  const { data: inventorysData } = useInventoryContext();

  return (
    <>
      {inventorysData?.map((article) => (
        <ArticleWrapper key={article.art_id}>
          <Article article={article} />
        </ArticleWrapper>
      ))}
    </>
  );
};

export default Products;
