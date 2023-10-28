import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header-container">
      <img src={Logo} alt='Todo list Logo'/>
      <p>List</p>
    </header>
  );
}
  
export default Header;