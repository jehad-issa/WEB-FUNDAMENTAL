var valueAndSign = [];
resultIsShown = false;

function clr() {
  document.querySelector("#display").innerHTML = 0;
}

function press(pressedNumber) {
  var displayedValue = document.querySelector("#display").innerHTML;
  if (!(displayedValue.includes(".") && pressedNumber === ".")) {
    if (parseInt(displayedValue) === 0 || resultIsShown) {
      displayedValue = pressedNumber;
      document.querySelector("#display").innerHTML = displayedValue;
      if (resultIsShown === true) {
        resultIsShown = false;
      }
    } else {
      var finalValue = displayedValue + pressedNumber;
      document.querySelector("#display").innerHTML = finalValue;
    }
  }
}
function setOP(pressedSign) {
  valueAndSign[0] = pressedSign;
  valueAndSign[1] = parseFloat(document.querySelector("#display").innerHTML);
  document.querySelector("#display").innerHTML = "";
}

function calculate() {
  var secondValue = parseFloat(document.querySelector("#display").innerHTML);
  var result = "";
  if (valueAndSign[0] === "+") {
    result = valueAndSign[1] + secondValue + "";
  }
  if (valueAndSign[0] === "-") {
    result = valueAndSign[1] - secondValue + "";
  }
  if (valueAndSign[0] === "*") {
    result = valueAndSign[1] * secondValue + "";
  }
  if (valueAndSign[0] === "/") {
    result = valueAndSign[1] / secondValue + "";
  }
  document.querySelector("#display").innerHTML = result;

  resultIsShown = true;
}