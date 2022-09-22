import Button from "./Button";
import "./Keyboard.css";
function KeyBooard() {
  return (
    <div className="keyboard__wrapper">
      <Button id={"AC"} className={"button"} symbol={"AC"} />
      <Button id={"divide"} className={"button"} symbol={"/"} />
      <Button id={"multiply"} className={"button"} symbol={"X"} />
      <Button id={"seven"} className={"button"} symbol={"7"} />
      <Button id={"eigth"} className={"button"} symbol={"8"} />
      <Button id={"nine"} className={"button"} symbol={"9"} />
      <Button id={"minus"} className={"button"} symbol={"-"} />
      <Button id={"four"} className={"button"} symbol={"4"} />
      <Button id={"five"} className={"button"} symbol={"5"} />
      <Button id={"six"} className={"button"} symbol={"6"} />
      <Button id={"plus"} className={"button"} symbol={"+"} />
      <Button id={"one"} className={"button"} symbol={"1"} />
      <Button id={"two"} className={"button"} symbol={"2"} />
      <Button id={"three"} className={"button"} symbol={"3"} />
      <Button id={"equals"} className={"button"} symbol={"="} />
      <Button id={"zero"} className={"button"} symbol={"0"} />
      <Button id={"dow"} className={"button"} symbol={"."} />
    </div>
  );
}
export default KeyBooard;
// grid-template-columns: repeat(4, 1fr);
// grid-gap: 5px;
// grid-auto-rows: minmax(200px, auto);
