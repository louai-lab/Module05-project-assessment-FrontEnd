import React from "react";
import StyleNavbar from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={StyleNavbar.container}>
      <NavLink to="/products">Products</NavLink>
      <NavLink to='/orders'>orders</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/signup'>Sign Up</NavLink>
    </div>
  );
}

export default Navbar;
