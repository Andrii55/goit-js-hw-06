const refs = {
  counterEll: document.querySelector("#counter"),
  valueEll: document.querySelector("#value"),
};

const decrementBtn = refs.counterEll.querySelector('[data-action="decrement"]');
const incrementBtn = refs.counterEll.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  refs.valueEll.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  refs.valueEll.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
