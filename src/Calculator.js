import React from "react";
import CalculatorKeyPad from "./CalculatorKeyPad";
import "./Calculator.css";

function Calculator() {
  let [output, setOutput] = React.useState("0");
  let [input, setInput] = React.useState("0");

  const handleClick = (symbol) => {
    if (symbol === "=") {
      console.log("this will be the result");
      setOutput(input);
    } else if (symbol === "AC") {
      setInput("0");
    } else if (input === "0" && symbol !== ".") {
      setInput(symbol);
    } else {
      setInput(input + symbol);
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
