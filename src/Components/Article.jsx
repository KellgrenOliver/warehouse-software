import React, { useState } from "react";
import styled from "@emotion/styled";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInventoryContext } from "../Contexts/InventoryContext";
import toast, { Toaster } from "react-hot-toast";

const Container = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

const Icon = styled(FontAwesomeIcon)({
  fontSize: "1.2rem",
  color: "white",
  cursor: "pointer",
});

const Form = styled.form({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  marginTop: "1rem",
});

const Input = styled.input({
  width: "100px",
  padding: "5px",
  border: "none",
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: "5px",
  "&:focus": {
    outline: "none",
  },
});

const Button = styled.button({
  backgroundColor: "#1dbf6e",
  border: "none",
  color: "white",
  width: "fit-content",
  padding: "5px 20px",
  borderTopRightRadius: "5px",
  borderBottomRightRadius: "5px",
  cursor: "pointer",
});

const Article = ({ article }) => {
  const [showAddArticle, setShowAddArticle] = useState(false);
  const [stock, setStock] = useState(0);

  let { data: inventoryData, setInventoryData } = useInventoryContext();

  const index = inventoryData
    .map((item) => item.art_id)
    .indexOf(article.art_id);

  const newArr = inventoryData?.filter(
    (item) => item.art_id !== article.art_id
  );

  const handleStock = (e) => {
    e.preventDefault();
    newArr.splice(index, 0, {
      art_id: article.art_id,
      name: article.name,
      stock: parseInt(article.stock) + parseInt(stock),
    });
    setInventoryData(newArr);
    setShowAddArticle(!showAddArticle);
    toast.success("Inventory has been updated!");
  };

  return (
    <>
      <Container>
        <span>
          {article?.name} x{article?.stock}
        </span>
        {!showAddArticle ? (
          <Icon
            icon={faPlus}
            onClick={() => setShowAddArticle(!showAddArticle)}
          />
        ) : (
          <Icon
            icon={faXmark}
            onClick={() => setShowAddArticle(!showAddArticle)}
          />
        )}
      </Container>
      {showAddArticle && (
        <Form onSubmit={handleStock}>
          <div>
            <Input
              required
              min="1"
              type="number"
              autoFocus
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <Button type="submit">Add</Button>
        </Form>
      )}
      <Toaster position="top-right" />
    </>
  );
};

export default Article;
