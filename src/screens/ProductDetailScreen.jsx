import React, { useContext } from "react";
import { useStoreHook } from "../hooks/useStoreHook";
import { useParams } from "react-router";

export const ProductDetailScreen = () => {
  const { id } = useParams();
  const { products } = useStoreHook();
  console.log("in detail ->", products);

  const deatilProduct = products.find((item) => item.id === Number(id));
  console.log("deatil product-->", deatilProduct);

  const contextData = useStoreHook();

  return (
    <div>
      <div className="h-[400px] w-auto">
        <img className="h-full" src={deatilProduct.imageUrl} alt="" />
      </div>
      <h1>Name - {deatilProduct.productName}</h1>
      <p>Description - {deatilProduct.description}</p>
      <p>Color - {deatilProduct.color}</p>

      <h2>Price - {deatilProduct.price}</h2>

    </div>
  );
};
