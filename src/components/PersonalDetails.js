import React from "react";

const Personal_Details = ({ name, Logo, value }) => {
  return (
    <>
      <div className="Personal-Info">
        {Logo}
        <div>
          <h3
            style={{
              margin: "0",
              padding: "0",
            }}
          >
            {name}
          </h3>
          <p
            style={{
              margin: "0",
              padding: "0",
            }}
          >
            {value}
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Personal_Details;
