const refs = {
  widgetEll: document.querySelector(".widget"),
  spanColorEll: document.querySelector(".color"),
  changeColorButtonEll: document.querySelector(".change-color"),
  bodyEll: document.body,
};

refs.changeColorButtonEll.addEventListener("click", onBackgroundColor);

function onBackgroundColor() {
  refs.bodyEll.style.backgroundColor = getRandomHexColor();
  refs.spanColorEll.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
