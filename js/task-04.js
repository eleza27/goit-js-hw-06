const valueEl = document.querySelector("#value");
const incrementEl = document.querySelector("button[data-action=increment]");
const decrementEl = document.querySelector("button[data-action=decrement]");
let counterValue = 0;

const handleIncrement = () => {
  counterValue += 1;
  valueEl.textContent = counterValue
};

const handleDecrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue
};

incrementEl.addEventListener("click", handleIncrement);
decrementEl.addEventListener("click", handleDecrement);