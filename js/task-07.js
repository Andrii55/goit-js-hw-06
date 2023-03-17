const ref = {
  inputControlEll: document.querySelector("#font-size-control"),
  inputSpanEll: document.querySelector("#text"),
};

ref.inputControlEll.addEventListener("input", () => {
  ref.inputSpanEll.style.fontSize = `${ref.inputControlEll.value}px`;
});
