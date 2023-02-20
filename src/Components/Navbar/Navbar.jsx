import React from "react";
import logo from "../../assets/logo2.png";
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <nav id="navbar" className="nav">
        <img src={logo} alt="logo" />
      </nav>
    </header>
  );
};

export default Navbar;
