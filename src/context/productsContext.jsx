import { createContext, useEffect, useState } from "react";

export const MyProductContext = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(
    () => JSON.parse(localStorage.getItem("pro")) || []
  );

  const addProducts = (data) => {
    let productObj = {
      ...data,
      id: Date.now(),
    };

    setProducts([...products, productObj]);
  };

  useEffect(() => {
    localStorage.setItem("pro", JSON.stringify(products));
  }, [products]);

  return (
    <MyProductContext.Provider value={{ products, addProducts, setProducts }}>
      {children}
    </MyProductContext.Provider>
  );
};
