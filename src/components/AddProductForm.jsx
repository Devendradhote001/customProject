import React, { useState } from "react";

export const AddProductForm = () => {
  const [first, setfirst] = useState({
    productName: "",
    description: "",
    color: "",
    price: 0,
    imageUrl: "",
  });

  console.log(first);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setfirst({
      ...first,
      [name]: value,
    });
  };

  return (
    <div className="mt-4 p-4">
      <form className="w-1/2 flex flex-col gap-[1rem]" action="">
        <div className="flex flex-col gap-[0.5rem]">
          <label className="text-xl" htmlFor="productName">
            Product Name
          </label>
          <input
            className="p-3 border"
            type="text"
            placeholder="Product Name"
            id="productName"
            onChange={handleChange}
            name="productName"
          />
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label className="text-xl" htmlFor="description">
            Description
          </label>
          <input
            className="p-3 border"
            type="text"
            placeholder="Description"
            id="description"
            onChange={handleChange}
            name="description"
          />
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label className="text-xl" htmlFor="color">
            Color
          </label>
          <input
            className="p-3 border"
            type="text"
            placeholder="Color"
            id="color"
            onChange={handleChange}
            name="color"
          />
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label className="text-xl" htmlFor="price">
            Price
          </label>
          <input
            className="p-3 border"
            type="number"
            placeholder="Price"
            id="price"
            onChange={handleChange}
            name="price"
          />
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <label className="text-xl" htmlFor="image">
            Image
          </label>
          <input
            className="p-3 border"
            type="url"
            placeholder="Image Url"
            id="image"
            name="imageUrl"
            onChange={handleChange}
          />
        </div>

        <button className="p-5 bg-red-600 text-white cursor-pointer">
          Create
        </button>
      </form>
    </div>
  );
};
