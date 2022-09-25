import React from "react";
import KeyBoard from "./Keyboard";
import "./Calculator.css";

function Calculator() {
  let [output, setOutput] = React.useState("2");
  let [input, setInput] = React.useState("5");

  return (
    <div id="Calculator">
      <div className="Calculator__output">{output}</div>
      <input className="Calculator__input" defaultValue={input}></input>
      <KeyBoard className="Calculator__keyboard" />
    </div>
  );
}
export default Calculator;
