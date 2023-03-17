const validationInputEll = document.querySelector("#validation-input");

validationInputEll.addEventListener("blur", () => {
  const expectedLengthEll = validationInputEll.dataset.length;
  const actualLengthEll = validationInputEll.value.length;
  if (expectedLengthEll <= actualLengthEll) {
    validationInputEll.classList.remove("invalid");
    validationInputEll.classList.add("valid");
  } else {
    validationInputEll.classList.remove("valid");
    validationInputEll.classList.add("invalid");
  }
});
