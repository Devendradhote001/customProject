import React from "react";
import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <div className="w-full h-[3rem] bg-blue-600 px-[2rem] text-white flex items-center justify-evenly">
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
        to="/product/detail"
      >
        Product Detail
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
        to="/addProducts"
      >
        Add Products
      </NavLink>
    </div>
  );
};
