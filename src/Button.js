import React from "react";

function Button(props) {
  return (
    <button id={props.id} className={props.className}>
      {props.symbol}
    </button>
  );
}
export default Button;