import React from "react";

const Profession = ({ name, info }) => {
  return (
    <div className="Profession">
      <h3>{name}</h3>
      {info}
    </div>
  );
};

export default Profession;
