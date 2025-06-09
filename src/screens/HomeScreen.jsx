import React, { useContext } from "react";
import { MyProductContext } from "../context/productsContext";
import { useStoreHook } from "../hooks/useStoreHook";
import { CardComponent } from "../components/CardComponent";

export const HomeScreen = () => {
  const { products } = useStoreHook();
  console.log("products in home-->", products);

  return (
    <div className="p-5 flex flex-wrap gap-5">
      {products.map((val) => (
        <>
          <CardComponent
            imageUrl={val.imageUrl}
            productName={val.productName}
            price={val.price}
          />
        </>
      ))}
    </div>
  );
};
