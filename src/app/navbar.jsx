import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <div className="navbar">
      <Link to="/new" className="link">
        <div>New</div>
      </Link>
      <Link to="/clothing" className="link">
        <div>Clothing</div>
      </Link>
      <Link to="/shoes" className="link">
        <div>Shoes</div>
      </Link>
      <Link to="/cart" className="link">
        <div>My Cart</div>
      </Link>
    </div>
  );
}