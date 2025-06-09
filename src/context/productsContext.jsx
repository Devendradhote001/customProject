import { createContext, useState } from "react";

export const MyProductContext = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      productName: "Motorola",
      description: "Smartphone",
      color: "green",
      price: 15000,
      imageUrl:
        "https://suprememobiles.in/cdn/shop/files/MotorolaG45-5GAndroid14.webp?v=1738747609",
    },
  ]);

  const addProducts = (data) => {
    let productObj = {
      ...data,
      id: Date.now(),
    };

    setProducts([...products, productObj]);
  };

  return (
    <MyProductContext.Provider value={{ products, addProducts }}>
      {children}
    </MyProductContext.Provider>
  );
};
