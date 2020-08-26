import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={{ color: "black" }}>
            Retail Me Logo
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" exact activeStyle={{ color: "black" }}>
            New
          </NavLink>
        </li>
        <li>
          <NavLink to="/clothing" exact activeStyle={{ color: "black" }}>
            Clothing
          </NavLink>
        </li>
        <li>
          <NavLink to="/shoes" exact activeStyle={{ color: "black" }}>
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" exact activeStyle={{ color: "black" }}>
            My Cart
          </NavLink>
        </li>
      </ul>
    </div>
  );
}