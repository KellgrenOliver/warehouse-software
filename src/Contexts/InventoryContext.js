import React, { createContext, useContext, useEffect, useState } from "react";

export const InventoryContext = createContext();

const useInventoryContext = () => {
  return useContext(InventoryContext);
};

const InventoryContextProvider = (props) => {
  const [inventory, setInventory] = useState([]);
  const getData = () => {
    fetch("inventory.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setInventory(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const values = {
    inventory,
  };

  return (
    <InventoryContext.Provider value={values}>
      {props.children}
    </InventoryContext.Provider>
  );
};

export { useInventoryContext, InventoryContextProvider as default };
