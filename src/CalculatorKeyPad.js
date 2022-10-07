import React from "react";
import CalculatorButton from "./CalculatorButton";
import "./CalculatorKeyPad.css";

function CalculatorKeyPad({ handleClick }) {
  return (
    <div className="keyboard__wrapper">
      <CalculatorButton id={"AC"} symbol={"AC"} handleClick={handleClick} />
      <CalculatorButton id={"divide"} symbol={"/"} handleClick={handleClick} />
      <CalculatorButton
        id={"multiply"}
        symbol={"X"}
        handleClick={handleClick}
      />
      <CalculatorButton id={"seven"} symbol={"7"} handleClick={handleClick} />
      <CalculatorButton id={"eigth"} symbol={"8"} handleClick={handleClick} />
      <CalculatorButton id={"nine"} symbol={"9"} handleClick={handleClick} />
      <CalculatorButton id={"minus"} symbol={"-"} handleClick={handleClick} />
      <CalculatorButton id={"four"} symbol={"4"} handleClick={handleClick} />
      <CalculatorButton id={"five"} symbol={"5"} handleClick={handleClick} />
      <CalculatorButton id={"six"} symbol={"6"} handleClick={handleClick} />
      <CalculatorButton id={"plus"} symbol={"+"} handleClick={handleClick} />
      <CalculatorButton id={"one"} symbol={"1"} handleClick={handleClick} />
      <CalculatorButton id={"two"} symbol={"2"} handleClick={handleClick} />
      <CalculatorButton id={"three"} symbol={"3"} handleClick={handleClick} />
      <CalculatorButton id={"equals"} symbol={"="} handleClick={handleClick} />
      <CalculatorButton id={"zero"} symbol={"0"} handleClick={handleClick} />
      <CalculatorButton id={"dow"} symbol={"."} handleClick={handleClick} />
    </div>
  );
}
export default CalculatorKeyPad;
