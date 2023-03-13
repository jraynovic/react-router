import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import ProductsComponent from "./ProductsComponent.js";
import ProductComponent from "./ProductComponent.js";
import DoubleParamsComponent from "./DoubleParamsComponent";
const Main = () => {
  return (
    <div>
      <p>
        one way we could get the url is like this {window.location.href + " "} using "window.location.href"
        from there we could use some logic and parsing to return desired
        components
      </p>
      <p>Or theres a better way, React Router...</p>
      <Routes>
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/products" element={<ProductsComponent />} />
        <Route path="/products/:id" element={<ProductComponent />} />
        <Route path="/products/:type/:id" element={<DoubleParamsComponent />} />

        <Route path="*" element={<HomeComponent />} />
      </Routes>
    </div>
  );
};
export default Main;
