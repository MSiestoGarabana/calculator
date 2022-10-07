import React from "react";
import CalculatorKeyPad from "./CalculatorKeyPad";
import "./Calculator.css";
import CalculatorInputLogic from "./CalculatorInputLogic";

function Calculator() {
  let [output, setOutput] = React.useState("0");
  let [input, setInput] = React.useState("0");

  const handleClick = (symbol) => {
    if (symbol === "=") {
      console.log("this will be the result");
    } else if (symbol === "AC") {
      setInput("0");
      setOutput("0");
    } else if (
      // no "+ X /" if input is 0
      input === "0" &&
      /[X/+-]/.test(symbol) === true
    ) {
      setInput(input + symbol);
      console.log("u cant start with this kind of operator");
    } else if (
      /[+X/]-/.test(input) === true &&
      /[+\-X/]/.test(symbol) === true
    ) {
      setInput(input.slice(0, -2) + symbol);
      console.log("You found me");
    } else if (input.at(-1) === "-" && /[+\-X/]/.test(symbol) === true) {
      setInput(input.slice(0, -1) + symbol);
      console.log("hey");
    } else if (
      //End of a number ? replace "." with symbol if symbol === operator
      /[+\-X/]/.test(symbol) === true &&
      splittedInput.at(-1).at(-1) === "."
    ) {
      setInput(input.slice(0, -1) + symbol);
    } else if (
      //no "." after an operator
      symbol === "." &&
      splittedInput.at(-1) === ""
    ) {
      console.log("U cant place a dot after an operator character");
    } else if (
      // u cant place two operators in a row (unless it´s a minus after another operator)
      /[+X/]/.test(symbol) === true &&
      /[+\-X/]/.test(input.at(-1)) === true
    ) {
      setInput(input.slice(0, -1) + symbol);
    } else if (
      //no double "." in a number
      symbol === "." &&
      /\./.test(splittedInput.at(-1)) === true
    ) {
      console.log("U cant place 2 dots in the same number");
    } else if (input === "0" && symbol !== ".") {
      setInput(symbol);
    } else {
      setInput(input + symbol);
    }
  };
  let splittedInput = input.split(/[+\-X/]/);
  console.log(input.at(-1));
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
