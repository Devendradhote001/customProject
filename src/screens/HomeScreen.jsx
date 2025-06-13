import React, { useContext, useMemo, useState } from "react";
import { MyProductContext } from "../context/productsContext";
import { useStoreHook } from "../hooks/useStoreHook";
import { CardComponent } from "../components/CardComponent";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const { products, setProducts } = useStoreHook();

  const [filteredvalue, setFilteredvalue] = useState("all");
  const [toggle, setToggle] = useState(false);

  const filteredProduct = useMemo(() => {
    console.log("executinggg.....");
    if (filteredvalue === "all") return products;
    return products.filter(
      (val) => val.brand.toLowerCase() === filteredvalue.toLowerCase()
    );
  }, [filteredvalue, products]);

  const handleDelete = (id) => {
    let filteredProduct = products.filter((val) => val.id !== id);
    setProducts(filteredProduct);
    toast.success("Product deleted");
    setFilteredvalue("all");
  };

  return (
    <div className="p-4 flex flex-col gap-5">
      <button
        onClick={() => setToggle(!toggle)}
        className="p-3 bg-yellow-500 text-white rounded-xl"
      >
        Toggle to :- {toggle === false ? "false" : "true"}
      </button>
      <div>
        <select
          className="p-4 bg-black text-white rounded-xl w-[400px]"
          onChange={(e) => setFilteredvalue(e.target.value)}
          name="brand"
          value={filteredvalue}
        >
          <option value="all">All</option>
          <option value="portronics">Portronics</option>
          <option value="redmi">Redmi</option>
          <option value="motorola">Motorola</option>
          <option value="apple">Apple</option>
        </select>
      </div>

      <div className="p-5 flex flex-wrap gap-10">
        {filteredProduct.map((val) => (
          <div key={val.id} className="flex flex-col gap-4 w-[200px]">
            <div key={val.id} onClick={() => navigate(`/detail/${val.id}`)}>
              <CardComponent
                imageUrl={val.imageUrl}
                productName={val.productName}
                price={val.price}
              />
            </div>
            <button
              onClick={() => handleDelete(val.id)}
              className="p-3 bg-red-500 text-white rounded-xl"
            >
              Delete product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
