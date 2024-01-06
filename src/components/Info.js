import React from "react";
import image from "./OIP.jpeg";
import { links, Personal } from "../assets/Social-media";
import Links from "./Links";
import Personal_Details from "./Personal_Details";
const Info = () => {
  return (
    <div className="Info">
      <div className="Perosnal-info">
        <img src={image} className="user-image" alt="" />
        <h2>Zaid Shaikh</h2>
        <span>Developer</span>
      </div>
      <div className="Social-media">
        {links.map((item, index) => {
          const { logo, link } = item;
          return <Links key={index} logo={logo} link={link}></Links>;
        })}
      </div>
      <div className="Personal-details">
        {Personal.map((item, index) => {
          return <Personal_Details key={index} {...item}></Personal_Details>;
        })}
        <button type="button" className="btn">
          {" "}
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Info;
