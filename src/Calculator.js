import React from "react";
import KeyBooard from "./Keyboard";
import "./Calculator.css";

function Calculator() {
  return (
    <div id="Calculator">
      <output className="Calculator__output">output</output>
      <input className="Calculator__input"></input>
      <KeyBooard className="Calculator__keyboard" />
    </div>
  );
}
export default Calculator;
