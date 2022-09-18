import Button from "./Button";
import "./Keyboard.css";
function KeyBooard() {
  return (
    <div className="keyboard__wrapper">
      <Button className={"AC"} symbol={"AC"} />
      <Button className={"divide"} symbol={"/"} />
      <Button className={"multiply"} symbol={"X"} />
      <Button className={"seven"} symbol={"7"} />
      <Button className={"eigth"} symbol={"8"} />
      <Button className={"nine"} symbol={"9"} />
      <Button className={"minus"} symbol={"-"} />
      <Button className={"four"} symbol={"4"} />
      <Button className={"five"} symbol={"5"} />
      <Button className={"six"} symbol={"6"} />
      <Button className={"plus"} symbol={"+"} />
      <Button className={"one"} symbol={"1"} />
      <Button className={"two"} symbol={"2"} />
      <Button className={"three"} symbol={"3"} />
      <Button className={"equals"} symbol={"="} />
      <Button className={"zero"} symbol={"0"} />
      <Button className={"dow"} symbol={"."} />
    </div>
  );
}
export default KeyBooard;
