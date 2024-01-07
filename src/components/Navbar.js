import React from "react";
import { navbar } from "../assets/Socialmedia";
import { Link, Outlet } from "react-router-dom";
import Links from "./Links";
const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        {navbar.map((item, index) => {
          return (
            <div className="navbar-link btn" key={index}>
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
