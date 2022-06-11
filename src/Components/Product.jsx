import React, { useState } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../Contexts/ProductsContext";
import { useInventoryContext } from "../Contexts/InventoryContext";

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

const Product = () => {
  const { data: productsData } = useProductsContext();
  const { data: inventoryDatadata } = useInventoryContext();

  const params = useParams();

  const product = productsData?.products?.find(
    (product) => product?.product_id === params.id
  );

  let [inventory, setInventory] = useState([]);

  inventory = inventoryDatadata?.inventory;

  console.log(inventory);

  const updateInventory = () => {};
  return (
    <>
      <Container>
        <Img src={product?.image} alt="product" />
        <h1>{product?.name}</h1>
        <h3>{product?.price}:-</h3>
        <button onClick={updateInventory()}>REMOVE</button>
        <br />
        <div>Contain Articles</div>
        {product?.contain_articles?.map((article) => (
          <div key={article.art_id}>
            <ul>
              <li>
                {article?.name} x {article?.amount_of}
              </li>
            </ul>
            <span></span>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Product;
