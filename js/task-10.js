function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function onCreateBoxes(amount) {
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
  boxesContainerEll.innerHTML = "";
}
const boxesContainerEll = document.querySelector("#boxes");
const createBtnEll = document.querySelector("[data-create]");
const destroyBtnEll = document.querySelector("[data-destroy]");

createBtnEll.addEventListener("click", () => {
  const amount = parseInt(document.querySelector("input").value);
  onCreateBoxes(amount);
});
destroyBtnEll.addEventListener("click", onDestroyBoxes);
