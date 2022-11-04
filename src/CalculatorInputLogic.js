export function getCalculatornputLogic(input, symbol) {
  const splittedInput = input.split(/[+\-X/]/);
  if (symbol === "=") {
    if (doesInputContainX(input) === true) {
      let newInput = input.replace(/X/g, "*");

      let integerResult = eval(newInput);
      let stringResult = integerResult.toString();
      return { newInput: stringResult, newOutput: input };
    }
    let integerResult = eval(input);
    let stringResult = integerResult.toString();
    return { newInput: stringResult, newOutput: input };
  } else if (isSymbolAC(symbol) === true) {
    return { newInput: "0", newOutput: "0" };
  } else if (isInput0(input) === true && isSymbolAnOperator(symbol) === true) {
    return { newInput: input + symbol };
  } else if (
    doesInputFinishWithpPlusMultiplicationOrDivisionBeforeMinus(input) ===
      true &&
    isSymbolAnOperator(symbol) === true
  ) {
    return { newInput: input.slice(0, -2) + symbol };
  } else if (/[+X/][-][0-9]/.test(input) === true && symbol === "/") {
    console.log("hey");
    return { newInput: input + symbol };
  } else if (
    isPreviousInputMinus(input) === true &&
    isSymbolAnOperator(symbol) === true
  ) {
    return { newInput: input.slice(0, -1) + symbol };
  } else if (isSymbolAnOperator(symbol) === true && input.at(-1) === ".") {
    return { newInput: input.slice(0, -1) + symbol };
  } else if (isSymbolDot === true && splittedInput.at(-1) === "") {
    console.log("U cant place a dot after an operator character");
    return { newInput: input };
  } else if (
    isSymbolMultiplicationDivisionOrPlus(symbol) === true &&
    doesInputFinishWithOperator(input) === true
  ) {
    return { newInput: input.slice(0, -1) + symbol };
  } else if (
    isSymbolDot(symbol) === true &&
    isThereDotInCurrentNumber(splittedInput) === true
  ) {
    console.log("U cant place 2 dots in the same number");
    return { newInput: input };
  } else if (isInput0(input) === true && isSymbolDot(symbol) === false) {
    return { newInput: symbol };
  } else {
    return { newInput: input + symbol };
  }
}

function isSymbolDot(symbol) {
  return symbol === "." ? true : false;
}

function isSymbolAC(symbol) {
  return symbol === "AC" ? true : false;
}
function isInput0(input) {
  return input === "0" ? true : false;
}
function isSymbolAnOperator(symbol) {
  return /[+\-X/]/.test(symbol) ? true : false;
}
function isPreviousInputMinus(input) {
  return input.at(-1) === "-" ? true : false;
}
function isSymbolMultiplicationDivisionOrPlus(symbol) {
  return /[X/+]/.test(symbol) ? true : false;
}
function doesInputContainX(input) {
  return /X/.test(input) ? true : false;
}
function doesInputFinishWithpPlusMultiplicationOrDivisionBeforeMinus(input) {
  return /[+X/]-/.test(input) ? true : false;
}
function doesInputFinishWithOperator(input) {
  return /[+\-X/]/.test(input.at(-1)) ? true : false;
}
function isThereDotInCurrentNumber(splittedInput) {
  return /\./.test(splittedInput.at(-1)) ? true : false;
}
