const refs = {
  inputEll: document.querySelector("#name-input"),
  outputEll: document.querySelector("#name-output"),
};

refs.inputEll.addEventListener("input", (event) => {
  const nameEll = event.target.value.trim();
  if (nameEll === "") {
    refs.outputEll.textContent = "Anonimous";
  } else {
    refs.outputEll.textContent = nameEll;
  }
}); 
