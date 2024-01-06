import React, { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
const Heading = () => {
  const [darkMode, setDarkMode] = useState(1);
  return (
    <div className="Heading">
      <h1>
        Zaid <span>Shaikh</span>
      </h1>
      {darkMode ? (
        <FaRegMoon
          className="Dark-mode"
          onClick={() => setDarkMode(0)}
        ></FaRegMoon>
      ) : (
        <FaMoon className="Dark-mode" onClick={() => setDarkMode(1)}></FaMoon>
      )}
    </div>
  );
};

export default Heading;
