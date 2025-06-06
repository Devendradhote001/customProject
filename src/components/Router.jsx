import React from "react";
import { Route, Routes } from "react-router";
import { HomeScreen } from "../screens/HomeScreen";
import { ProductDetailScreen } from "../screens/ProductDetailScreen";
import { AddProductScreen } from "../screens/AddProductScreen";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product/detail" element={<ProductDetailScreen />} />
        <Route path="/addProducts" element={<AddProductScreen />} />
      </Routes>
    </div>
  );
};
