import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/" exact activeStyle={{ color: "gray" }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/new" exact activeStyle={{ color: "gray" }}>
          New
        </NavLink>
      </li>
      <li>
        <NavLink to="/clothing" exact activeStyle={{ color: "gray" }}>
          Clothing
        </NavLink>
      </li>
      <li>
        <NavLink to="/shoes" exact activeStyle={{ color: "gray" }}>
          Shoes
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" exact activeStyle={{ color: "gray" }}>
          My Cart
        </NavLink>
      </li>
    </ul>
  );
}