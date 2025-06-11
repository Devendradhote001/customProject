import React from "react";

export const CardComponent = ({ imageUrl, productName, price }) => {
    console.log(imageUrl, productName, price)
  return (
    <div className="border w-[15vw] p-3 rounded-xl cursor-pointer">
      <div className="h-[200px]">
        <img className="h-full" src={imageUrl} alt="pic" />
      </div>
      <h2 className="font-bold text-blue-600">{productName}</h2>
      <p className="text-sm">{price}</p>
    </div>
  );
};
