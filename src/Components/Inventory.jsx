import React from "react";
import { useInventoryContext } from "../Contexts/InventoryContext";

const Inventory = () => {
  const { inventory } = useInventoryContext();
  console.log("inventory", inventory);
  return <div>Inventory</div>;
};

export default Inventory;
