import React, { useState } from "react";
import { useFormHook } from "../hooks/useFormHook";
import { useStoreHook } from "../hooks/useStoreHook";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const AddProductForm = () => {
  const navigate = useNavigate();
  const { addProducts } = useStoreHook();

  const { values, handleChange, resetForm } = useFormHook({
    productName: "",
    description: "",
    color: "",
    price: 0,
    imageUrl: "",
    brand: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addProducts(values);
    toast.success("Product added successfully");
    navigate("/");
    resetForm();
  };

  return (
    <div className="mt-4 p-4">
      <form
        onSubmit={handleFormSubmit}
        className="w-1/2 flex flex-col gap-[1rem]"
        action=""
      >
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
            value={values.productName}
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
            value={values.description}
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
            value={values.color}
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
            value={values.price}
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
            value={values.imageUrl}
          />
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <label className="text-xl" htmlFor="brand">
            Brand
          </label>
          <input
            className="p-3 border"
            type="text"
            placeholder="Brand Name"
            id="brand"
            name="brand"
            onChange={handleChange}
            value={values.brand}
          />
        </div>

        <button className="p-5 bg-red-600 text-white cursor-pointer">
          Create
        </button>
      </form>
    </div>
  );
};
