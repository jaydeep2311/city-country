import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-country">Addcountry</Link>
        <Link to="/add-city">AddCIty</Link>
      </nav>
    </div>
  );
}

export default Navbar;
