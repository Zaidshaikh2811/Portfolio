import React from "react";
import { navbar } from "../assets/Socialmedia";
const Navbar = () => {
  return (
    <div className="Navbar">
      {navbar.map((item, index) => {
        return (
          <div className="navbar-link btn" key={index}>
            {item.logo}
            <button className="btn">{item.name}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
