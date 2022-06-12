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
  flexDirection: "column",
  margin: "3rem auto 1rem auto",
  gap: "2rem",
  "@media screen and (min-width: 768px)": {
    margin: "10rem auto 2rem auto",
    flexDirection: "row",
  },
});

const InfoWrapper = styled.div({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  padding: 0,
  width: "100%",
  "@media screen and (min-width: 600px)": {
    padding: "1rem",
    width: "fit-content",
  },
});

const Img = styled.img({
  width: "300px",
  height: "300px",
  borderRadius: "5px",
  "@media screen and (min-width: 600px)": {
    width: "400px",
    height: "400px",
  },
  "@media screen and (min-width: 768px)": {
    width: "300px",
    height: "300px",
  },
  "@media screen and (min-width: 1024px)": {
    width: "400px",
    height: "400px",
  },
});

const Header = styled.h1({
  fontWeight: 200,
  fontSize: "3rem",
});

const Ul = styled.ul({
  paddingInlineStart: "0.5rem",
  margin: "0.5rem",
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
  const [isRemovable, setIsRemovable] = useState(true);

  let { data: inventoryData, setData: setInventoryData } =
    useInventoryContext();

  const params = useParams();

  const product = productsData?.find(
    (product) => product?.product_id === params.id
  );

  useEffect(() => {
    product?.contain_articles?.map((article) => {
      const itemStock = inventoryData?.find(
        (item) => item.art_id === article.art_id
      ).stock;
      if (parseInt(itemStock) < parseInt(article.amount_of)) {
        setIsRemovable(false);
      }
    });
  }, [inventoryData, product]);

  const updateInventory = (product) => {
    let newStockArr = [];
    inventoryData?.map((item) => {
      return product?.contain_articles?.find((article) => {
        if (item.art_id === article.art_id) {
          newStockArr.push({
            art_id: item.art_id,
            name: item.name,
            stock: JSON.stringify(item.stock - article.amount_of),
          });
        }
      });
    });
    const updatedInventory = inventoryData?.map(
      (obj) => newStockArr?.find((o) => o.art_id === obj.art_id) || obj
    );

    setInventoryData(updatedInventory);

    toast.success("Inventory has been updated!");
  };

  return (
    <>
      {product && (
        <Container>
          <Img src={product.image} alt="product" />
          <InfoWrapper>
            <Header>{product.name}</Header>
            <h3>{product.price}:-</h3>
            {product.contain_articles.map((article) => (
              <div key={article.art_id}>
                <div>
                  <Ul>
                    <li>
                      {article?.name} x{article?.amount_of}
                      <div>
                        Stock:{" "}
                        {
                          inventoryData?.find(
                            (item) => item.art_id === article.art_id
                          )?.stock
                        }
                      </div>
                    </li>
                  </Ul>
                </div>
              </div>
            ))}
            {isRemovable && (
              <Button onClick={() => updateInventory(product)}>REMOVE</Button>
            )}
          </InfoWrapper>
          <Toaster position="top-right" />
        </Container>
      )}
    </>
  );
};

export default Product;
