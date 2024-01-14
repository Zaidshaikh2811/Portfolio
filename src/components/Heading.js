import React, { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { darkToggle } from "../features/DarkMode";

const Heading = () => {
  // const [darkMode, setDarkMode] = useState(1);
  const Dispatch = useDispatch();
  // const toggle = () => {
  //   Dispatch(darkToggle());
  // };

  const initialState = useSelector((store) => store.user);
  return (
    <div className="Heading">
      <h1>
        Zaid <span>Shaikh</span>
      </h1>
      {initialState ? (
        <FaRegMoon
          className="Dark-mode"
          onClick={() => Dispatch(darkToggle())}
        ></FaRegMoon>
      ) : (
        <FaMoon
          className="Dark-mode"
          onClick={() => Dispatch(darkToggle())}
        ></FaMoon>
      )}
    </div>
  );
};

export default Heading;
