import React from "react";

const Links = ({ logo, link }) => {
  return (
    <div className="Links">
      <a href={link} className="Social-Links">
        {logo}
      </a>
    </div>
  );
};

export default Links;
