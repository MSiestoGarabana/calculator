import React from "react";
import Button from "./Button";
import "./Keyboard.css";

function KeyBoard() {
  let [pressedKey, setPressedKey] = React.useState("1");
  console.log(pressedKey);

  return (
    <div className="keyboard__wrapper">
      <Button
        id={"AC"}
        className={"button"}
        symbol={"AC"}
        onClick={() => setPressedKey("AC")}
      />
      <Button
        id={"divide"}
        className={"button"}
        symbol={"/"}
        onClick={() => setPressedKey("/")}
      />
      <Button
        id={"multiply"}
        className={"button"}
        symbol={"X"}
        onClick={() => setPressedKey("x")}
      />
      <Button
        id={"seven"}
        className={"button"}
        symbol={"7"}
        onClick={() => setPressedKey("7")}
      />
      <Button
        id={"eigth"}
        className={"button"}
        symbol={"8"}
        onClick={() => setPressedKey("8")}
      />
      <Button
        id={"nine"}
        className={"button"}
        symbol={"9"}
        onClick={() => setPressedKey("9")}
      />
      <Button
        id={"minus"}
        className={"button"}
        symbol={"-"}
        onClick={() => setPressedKey("-")}
      />
      <Button
        id={"four"}
        className={"button"}
        symbol={"4"}
        onClick={() => setPressedKey("4")}
      />
      <Button
        id={"five"}
        className={"button"}
        symbol={"5"}
        onClick={() => setPressedKey("5")}
      />
      <Button
        id={"six"}
        className={"button"}
        symbol={"6"}
        onClick={() => setPressedKey("6")}
      />
      <Button
        id={"plus"}
        className={"button"}
        symbol={"+"}
        onClick={() => setPressedKey("+")}
      />
      <Button
        id={"one"}
        className={"button"}
        symbol={"1"}
        onClick={() => setPressedKey("1")}
      />
      <Button
        id={"two"}
        className={"button"}
        symbol={"2"}
        onClick={() => setPressedKey("2")}
      />
      <Button
        id={"three"}
        className={"button"}
        symbol={"3"}
        onClick={() => setPressedKey("3")}
      />
      <Button
        id={"equals"}
        className={"button"}
        symbol={"="}
        onClick={() => setPressedKey("=")}
      />
      <Button
        id={"zero"}
        className={"button"}
        symbol={"0"}
        onClick={() => setPressedKey("0")}
      />
      <Button
        id={"dow"}
        className={"button"}
        symbol={"."}
        onClick={() => setPressedKey(".")}
      />
    </div>
  );
}
export default KeyBoard;
