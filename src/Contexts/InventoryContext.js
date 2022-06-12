import React, { createContext, useContext, useEffect, useState } from "react";

export const InventoryContext = createContext();

const useInventoryContext = () => {
  return useContext(InventoryContext);
};

const InventoryContextProvider = (props) => {
  const [data, setData] = useState([]);
  const getData = () => {
    const savedData = localStorage.getItem("Inventory");
    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
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
          setData(myJson?.inventory);
        });
    }
  };

  const setInventoryData = (data) => {
    localStorage.setItem("Inventory", JSON.stringify(data));
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const values = {
    data,
    setInventoryData,
  };

  return (
    <InventoryContext.Provider value={values}>
      {props.children}
    </InventoryContext.Provider>
  );
};

export { useInventoryContext, InventoryContextProvider as default };
