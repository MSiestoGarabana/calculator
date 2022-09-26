import React from "react";
import CalculatorKeyPad from "./CalculatorKeyPad";
import "./Calculator.css";

function Calculator() {
  let [output, setOutput] = React.useState("");
  let [input, setInput] = React.useState("0");
  console.log(input);

  const handleClick = (symbol) => {
   switch
    if (input === "0") {
      setInput(symbol);
    } else setInput(input + symbol);
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
