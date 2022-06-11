import styled from "@emotion/styled";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductsContext } from "../Contexts/ProductsContext";
import { useInventoryContext } from "../Contexts/InventoryContext";
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

const Img = styled.img({
  width: "400px",
  height: "400px",
  borderRadius: "5px",
});

const ProductPage = () => {
  const { data: productsData } = useProductsContext();
  const { data: inventoryDatadata } = useInventoryContext();

  const params = useParams();
  const navigate = useNavigate();

  const product = productsData?.products?.find(
    (product) => product?.product_id === params.id
  );

  let [inventory, setInventory] = useState([]);

  inventory = inventoryDatadata?.inventory;

  console.log(inventory);

  const updateInventory = () => {};

  return (
    <Container>
      <BackArrow icon={faArrowLeft} onClick={() => navigate("/")} />
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
  );
};

export default ProductPage;
