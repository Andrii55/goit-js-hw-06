const refs = {
  inputEll: document.querySelector("#name-input"),
  outputEll: document.querySelector("#name-output"),
};

refs.inputEll.addEventListener("input", () => {
  const nameEll = refs.inputEll.value.trim();
  if (nameEll === "") {
    refs.outputEll.textcontent = "Anonimous";
  } else {
    refs.outputEll.textContent = nameEll;
  }
});
