import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InventoryContextProvider from "./Contexts/InventoryContext";
import ProductsContextProvider from "./Contexts/ProductsContext";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import InventoryPage from "./Pages/InventoryPage";
import ProductPage from "./Pages/ProductPage";

const App = () => {
  return (
    <div id="app">
      <Router>
        <InventoryContextProvider>
          <ProductsContextProvider>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/products" element={<ProductsPage />} />
              <Route exact path="/inventory" element={<InventoryPage />} />
              <Route exact path="/products/:id" element={<ProductPage />} />
              <Route
                exact
                path="*"
                element={<h1>The page you are looking for does not exist.</h1>}
              />
            </Routes>
          </ProductsContextProvider>
        </InventoryContextProvider>
      </Router>
    </div>
  );
};

export default App;
