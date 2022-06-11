import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InventoryContextProvider from "./Contexts/InventoryContext";
import ProductsContextProvider from "./Contexts/ProductsContext";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <div id="app">
      <Router>
        <InventoryContextProvider>
          <ProductsContextProvider>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route
                exact
                path="*"
                element={<h1>SIDAN DU SÖKER FINNS INTE</h1>}
              />
            </Routes>
          </ProductsContextProvider>
        </InventoryContextProvider>
      </Router>
    </div>
  );
};

export default App;
