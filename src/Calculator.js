import React from "react";
import KeyBooard from "./Keyboard";

function Calculator() {
  return (
    <div className="Calculator">
      <output className="Calculator__output">output</output>
      <input className="Calculator__input"></input>
      <KeyBooard className="Calculator__keyboard" />
    </div>
  );
}
export default Calculator;
