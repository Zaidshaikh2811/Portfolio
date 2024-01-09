import React, { useState } from "react";
import { navbar } from "../assets/Socialmedia";
import { Link, Outlet } from "react-router-dom";
import Links from "./Links";
const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="Navbar">
        {navbar.map((item, index) => {
          return (
            <div
              key={index}
              className={`your-element navbar-link btn ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item.logo}
              <Link to={item.path}>{item.name}</Link>
            </div>
          );
        })}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
