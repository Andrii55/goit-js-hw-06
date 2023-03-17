const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь ласка, заповніть всі поля форми.");
  }

  const formData = new FormData(event.currentTarget);
  const formValues = {};

  formData.forEach((value, name) => {
    formValues[name] = value;
  });

  console.log(formValues);

  event.currentTarget.reset();
}
