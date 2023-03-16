function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function onCreateBoxes(amount) {
  const boxesContainerEll = document.querySelector("#boxes");
  const boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxEll = document.createElement("div");
    boxEll.style.width = `${boxSize + i * 10}px`;
    boxEll.style.height = `${boxSize + i * 10}px`;
    boxEll.style.backgroundColor = getRandomHexColor();
    boxesContainerEll.appendChild(boxEll);
  }
}

function onDestroyBoxes() {
  const boxesContainerEll = document.querySelector("#boxes");
  boxesContainerEll.innerHTML = "";
}

const createBtnEll = document.querySelector("[data-create]");
const destroyBtnEll = document.querySelector("[data-destroy]");

createBtnEll.addEventListener("click", () => onCreateBoxes(5));
destroyBtnEll.addEventListener("click", onDestroyBoxes);
