import React from "react";
import "./CalculatorButton.css";

function CalculatorButton({ symbol, id, handleClick }) {
  return (
    <button onClick={() => handleClick(symbol)} id={id} className={"button"}>
      {symbol}
    </button>
  );
}
export default CalculatorButton;
