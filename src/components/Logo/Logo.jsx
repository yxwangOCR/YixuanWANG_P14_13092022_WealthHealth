import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Logo.css";

function Logo() {
  return (
    <div className="header-item">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <h1>WEALTH HEALTH</h1>
    </div>
  );
}

export default Logo;
