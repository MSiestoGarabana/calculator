import React from "react";
import CalculatorKeyPad from "./CalculatorKeyPad";
import "./Calculator.css";
import { getCalculatornputLogic } from "./CalculatorInputLogic";

function Calculator() {
  let [output, setOutput] = React.useState("0");
  let [input, setInput] = React.useState("0");

  const handleClick = (symbol) => {
    const { newInput, newOutput } = getCalculatornputLogic(input, symbol);
    setInput(newInput);
    if (newOutput) {
      setOutput(newOutput);
    }
  };

  return (
    <div id="Calculator">
      <div className="Calculator__output">{output}</div>
      <input className="Calculator__input" value={input}></input>
      <CalculatorKeyPad
        handleClick={handleClick}
        className="Calculator__keyboard"
      />
    </div>
  );
}
export default Calculator;
