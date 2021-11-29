import React from "react";

function Quantity({ type, number }) {
  return (
    <>
      <p className={type}>
        {type}: {number}
      </p>
    </>
  );
}

export default Quantity;
