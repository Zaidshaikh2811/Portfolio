import React from "react";

const Profession = ({ name, info, logo }) => {
  return (
    <div className="Profession">
      <h3>
        {logo}
        {name}
      </h3>
      {info}
    </div>
  );
};

export default Profession;
