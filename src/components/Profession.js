import React from "react";

const Profession = ({ name, info, logo }) => {
  return (
    <div className="Profession">
      <h3>
        <span>{logo}</span>
        {name}
      </h3>
      {info}
    </div>
  );
};

export default Profession;
