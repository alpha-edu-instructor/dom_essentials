const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const radioButtons = document.querySelectorAll("input[name='gender']");
const select = document.getElementById("select");

// Errors
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const checkboxError = document.getElementById("checkboxError");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  // Username:
  const username = usernameInput.value;
  if (username === "") {
    usernameError.textContent = "Введите ваше имя";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  // E-mail:
  const email = emailInput.value;
  if (email === "") {
    emailError.textContent = "Введите ваш e-mail";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password:
  const password = passwordInput.value;
  if (password === "") {
    passwordError.textContent = "Введите ваш пароль";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Are you agree?
  const isAgree = checkbox.checked;
  if (!isAgree) {
    checkboxError.textContent = "Вы должны быть согласны";
    isValid = false;
  } else {
    checkboxError.textContent = "";
  }

  // Gender
  let gender;
  for (const radio of radioButtons) {
    if (radio.checked) {
      gender = radio.value;
    }
  }

  // Country:
  const country = select.value;

  if (isValid) {
    alert("Данные отправлены!");
  }
});
