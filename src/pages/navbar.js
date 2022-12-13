import React from "react";
import "../css/style2.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <h3 classNameName="logo">
          <span>Kelo</span>mpok 1
        </h3>
        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar" classNameName="fas fa-bars"></label>
        <nav className="navbar">
          <Link to="/#home">Home</Link>
          <Link to="/#about">About</Link>
          <Link to="/#biodata">Biodata</Link>
          <Link to="/Calculator">Kalkulator</Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
