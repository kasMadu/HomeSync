import React from "react";
import Logo from "../../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="" className="nav-bar-logo" />
      <div className="vertical-line"></div>
      <div>
        <a href="#home">Home</a>
        <a href="#property">Property</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <button>
          <img />
        </button>
        <button></button>
      </div>
    </nav>
  );
};

export default NavBar;
