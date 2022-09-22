import React from "react";
import KeyBooard from "./Keyboard";
import "./Calculator.css";

function Calculator() {
  let [input, setInput] = React.useState(0);
  let [output, setOutput] = React.useState(9);
  return (
    <div id="Calculator">
      <output className="Calculator__output">{output}</output>
      <input className="Calculator__input" value={0}></input>
      <KeyBooard className="Calculator__keyboard" />
    </div>
  );
}
export default Calculator;
