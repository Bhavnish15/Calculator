const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screen");

let calculation = [];

let accumulativeCalculation;

function calculate(button) {
  var value = button.textContent;
  if (value === "CLEAR") {
    calculation = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumulativeCalculation);
  } else {
    calculation.push(value);
    accumulativeCalculation = calculation.join("");
    screenDisplay.textContent = accumulativeCalculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);

document.addEventListener("keydown", function (e) {
  calculateWithKey(e.key);
});

function calculateWithKey(key) {
  if (key === "Backspace") {
    calculation = [];
    screenDisplay.textContent = ".";
  } else if (key === "Enter") {
    screenDisplay.textContent = eval(accumulativeCalculation);
  } else {
    calculation.push(key);
    accumulativeCalculation = calculation.join("");
    screenDisplay.textContent = accumulativeCalculation;
  }
}
