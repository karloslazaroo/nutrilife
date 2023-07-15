import React from "react";
import "./Navbar.css";
import nutrilife from "../../../assets/nutrilife.png";
import { Link } from "react-router-dom";

function Navbar() {
  const goToContact = () => {
    
    window.scrollTo({
        top: 2500,
        behavior: 'smooth',
    });
};




  return (
    <div className="navbar">
      <img src={nutrilife}></img>
      <Link to="/" class="hover-underline">
        Home
      </Link>
      <Link to="/products" class="hover-underline">
        Categories
      </Link>
      <Link to='/' onClick={goToContact} class="hover-underline">
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
