import React, { useContext } from "react";
import { MyProductContext } from "../context/productsContext";
import { useStoreHook } from "../hooks/useStoreHook";

export const ProductDetailScreen = () => {
  const contextData = useStoreHook();

  return <div>ProductDetailScreen</div>;
};
