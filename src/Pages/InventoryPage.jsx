import React from "react";
import BackArrow from "../Components/BackArrow";
import Header from "../Components/Header";
import Inventory from "../Components/Inventory";

const InventoryPage = () => {
  return (
    <>
      <BackArrow url={"/"} />
      <Header title={"Inventory"} />
      <Inventory />
    </>
  );
};

export default InventoryPage;
