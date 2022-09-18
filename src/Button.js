import React from "react";
function Button(props) {
  return <button className={props.className}>{props.symbol}</button>;
}
export default Button;
