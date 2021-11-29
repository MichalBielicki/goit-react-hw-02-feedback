import React from "react";

function Button({ type, fnc }) {
  return (
    <>
      <button type={Button} clssName={type} onClick={fnc}>
        {type}
      </button>
    </>
  );
}

export default Button;
