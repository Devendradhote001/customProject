import React, { useContext } from "react";
import { MyProductContext } from "../context/productsContext";

export const useStoreHook = () => useContext(MyProductContext);
