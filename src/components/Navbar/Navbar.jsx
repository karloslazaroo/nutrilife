import React from "react";
import './Navbar.css';
import nutrilife from '../../assets/nutrilife.png';

function Navbar() {
  return (
   
      <div className="navbar">
        <img src={nutrilife}></img>
       <a href="" class="hover-underline-animation">Home</a>
       <a href=""class="hover-underline-animation">Categories</a>
       <a href=""class="hover-underline-animation">Contact</a>
      </div>
    
  );
}

export default Navbar;
