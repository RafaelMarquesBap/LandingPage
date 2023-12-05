const form = document.getElementById("form");

const username = document.getElementById("username");

const age = document.getElementById("age");

const address = document.getElementById("address");

const login = document.getElementById("login");

const password = document.getElementById("password");

const passwordtwo = document.getElementById("passwordtwo");

const msgError = document.getElementById("msgError");
const msgSuccess = document.getElementById("msgSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkForm();
});

username.addEventListener("keyup", () => {
  checkInputUsername();
});

age.addEventListener("keyup", () => {
  checkInputAge();
});
age.addEventListener("input", () => {
  age.value.replace(/D/g), "".substring(0, 1);
});

login.addEventListener("keyup", () => {
  checkInputLogin();
});

password.addEventListener("keyup", () => {
  checkInputPassword();
});
passwordtwo.addEventListener("keyup", () => {
  checkInputPasswordTwo();
});

//=============VERIFICA O NOME=============
function checkInputUsername() {
  let usernameValue = username.value.trim();

  if (usernameValue === "") {
    errorValidation(username, "Nome é obrigatório.");
  } else if (usernameValue.length < 10) {
    errorValidation(username, "Nome deve ter ao menos 10 caracteres.");
  } else {
    successValidation(username);
  }
}

//==============VERIFICA A IDADE==============
function checkInputAge() {
  let ageValue = age.value.trim();

  if (ageValue === "") {
    errorValidation(age, "Idade é obrigatória.");
  } else {
    successValidation(age);
  }
}

//===============VERIFICA O ENDEREÇO==============
function checkInputAddress() {
  let addressValue = address.value.trim();

  if (addressValue === "") {
    successValidation(address);
  }
}

//================VERIFICA O LOGIN=========
function checkInputLogin() {
  let loginValue = login.value.trim();

  if (loginValue === "") {
    errorValidation(login, "Login é obrigatório.");
  } else if (loginValue.length !== 5) {
    errorValidation(login, "Login deve ter exatamente 5 caracteres.");
  } else {
    successValidation(login);
  }
}

//============VERIFICA A SENHA===============
function checkInputPassword() {
  let passwordValue = password.value.trim();

  if (passwordValue === "") {
    errorValidation(password, "Senha é obrigatória.");
  }
  if (passwordValue.length < 8) {
    errorValidation(password, "Senha deve ter ao menos 8 caracteres.");
  } else {
    successValidation(password);
  }
}

//===========VERIFICA CONFIRMAR SENHA===========
function checkInputPasswordTwo() {
  let passwordValue = password.value.trim();
  let passwordtwoValue = passwordtwo.value.trim();

  if (passwordtwoValue === "") {
    errorValidation(passwordtwo, "Confirmar senha é obrigatório.");
  } else if (passwordValue != passwordtwoValue) {
    errorValidation(passwordtwo, "As senhas não são iguais.");
  } else {
    successValidation(passwordtwo);
  }
}

//==========VERIFICA TODOS OS INPUTS===========
function checkForm() {
  checkInputUsername();
  checkInputAge();
  checkInputAddress();
  checkInputLogin();
  checkInputPassword();
  checkInputPasswordTwo();

  const formItems = form.querySelectorAll(".form-control");

  const isValid = [...formItems].every((item) => {
    return item.className === "form-control success";
  });
  if (isValid) {
    msgSuccess.setAttribute("style", "display: block");
    msgSuccess.innerHTML = "<strong>Cadastrando usuário...</strong>";
    msgError.innerHTML = "";
    msgError.setAttribute("style", "display: none");

    setTimeout(() => {
      window.location.href = "https://aluno-gra.unisuam.edu.br/";
    }, 3000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "Preencha todos os campos corretamente antes de cadastrar";
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display: none");
  }
}

function errorValidation(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function successValidation(input, message) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}
