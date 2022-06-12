import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../Contexts/ProductsContext";
import toast, { Toaster } from "react-hot-toast";
import { useInventoryContext } from "../Contexts/InventoryContext";

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  margin: "10rem auto 2rem auto",
  gap: "2rem",
});

const InfoWrapper = styled.div({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  padding: "1rem",
});

const Img = styled.img({
  width: "350px",
  height: "350px",
  borderRadius: "5px",
});

const Ul = styled.ul({
  paddingInlineStart: "1rem",
  margin: "0.2rem",
});

const Button = styled.button({
  backgroundColor: "#b53f45",
  border: "none",
  color: "white",
  width: "fit-content",
  padding: "0.5rem 1.5rem",
  cursor: "pointer",
  marginTop: "1rem",
  "&:hover": {
    backgroundColor: "#9c2c31",
  },
});

const Product = () => {
  const { data: productsData } = useProductsContext();

  let { data: inventoryDatadata } = useInventoryContext();

  let [inventory, setInventory] = useState([]);

  useEffect(() => {
    setInventory(inventoryDatadata?.inventory);
  }, [inventoryDatadata?.inventory]);

  const params = useParams();

  const product = productsData?.products?.find(
    (product) => product?.product_id === params.id
  );

  let article1 = inventory?.[0];
  let article2 = inventory?.[1];
  let article3 = inventory?.[2];
  let article4 = inventory?.[3];

  let containArticles = product?.contain_articles?.map((article) => article);

  const containArticle1 = containArticles?.find(
    (article) => article.art_id === "1"
  );
  const containArticle2 = containArticles?.find(
    (article) => article.art_id === "2"
  );
  const containArticle3 = containArticles?.find(
    (article) => article.art_id === "3"
  );
  const containArticle4 = containArticles?.find(
    (article) => article.art_id === "4"
  );

  let updatedArticle1Stock = (
    Number(article1?.stock) - Number(containArticle1?.amount_of)
  ).toString();

  let updatedArticle2Stock = (
    Number(article2?.stock) - Number(containArticle2?.amount_of)
  ).toString();

  let updatedArticle3Stock = (
    Number(article3?.stock) - Number(containArticle3?.amount_of)
  ).toString();

  let updatedArticle4Stock = (
    Number(article4?.stock) - Number(containArticle4?.amount_of)
  ).toString();

  const updateInventory = () => {
    if (containArticles?.map((article) => article.art_id)?.includes("1")) {
      localStorage.setItem(
        "Article 1",
        JSON.stringify({
          art_id: "1",
          name: "Leg",
          stock: updatedArticle1Stock,
        })
      );
    }
    if (containArticles?.map((article) => article.art_id)?.includes("2")) {
      localStorage.setItem(
        "Article 2",
        JSON.stringify({
          art_id: "2",
          name: "Screw",
          stock: updatedArticle2Stock,
        })
      );
    }
    if (containArticles?.map((article) => article.art_id)?.includes("3")) {
      localStorage.setItem(
        "Article 3",
        JSON.stringify({
          art_id: "3",
          name: "Seat",
          stock: updatedArticle3Stock,
        })
      );
    }
    if (containArticles?.map((article) => article.art_id)?.includes("4")) {
      localStorage.setItem(
        "Article 4",
        JSON.stringify({
          art_id: "4",
          name: "Table top",
          stock: updatedArticle4Stock,
        })
      );
    }
    toast.success("Inventory has been updated!");
  };

  return (
    <>
      {product && (
        <Container>
          <Img src={product.image} alt="product" />
          <InfoWrapper>
            <h1>{product.name}</h1>
            <h3>{product.price}:-</h3>
            <br />
            <b>Contain Articles</b>
            {product.contain_articles.map((article) => (
              <div key={article.art_id}>
                <div>
                  <Ul>
                    <li>
                      {article.name} x {article.amount_of}
                    </li>
                  </Ul>
                </div>
              </div>
            ))}
            <Button onClick={updateInventory}>REMOVE</Button>
          </InfoWrapper>
          <Toaster position="top-right" />
        </Container>
      )}
    </>
  );
};

export default Product;
