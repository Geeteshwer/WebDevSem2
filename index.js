const numberInput = document.getElementById("numberInput");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

function factorialUsingLoop(number) {
  let factorial = 1;

  for (let i = 1; i <= number; i += 1) {
    factorial *= i;
  }

  return factorial;
}

calculateBtn.addEventListener("click", () => {
  const value = Number(numberInput.value);

  if (numberInput.value === "" || !Number.isInteger(value) || value < 0) {
    result.textContent = "Please enter a valid non-negative whole number.";
    return;
  }

  const factorial = factorialUsingLoop(value);
  result.textContent = `Factorial of ${value} is ${factorial}.`;
});
