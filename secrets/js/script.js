// Elements
let isValid = 0;
let createh1 = document.querySelector(".create-account");
let user = document.getElementById("user");
let pass = document.getElementById("pass");
let verify = document.getElementById("verify");
let userFB = document.querySelector(".valid-user");
let passFB = document.querySelector(".valid-pass");
let verifyFB = document.querySelector(".verify");
let createAccount = document.getElementById("create-account");

// Event Listeners
user.addEventListener("input", isValidUser);
pass.addEventListener("input", isValidPass);
if (verify != null) verify.addEventListener("input", isValidPass);
user.addEventListener("input", isFormValid);
pass.addEventListener("input", isFormValid);
if (verify != null) verify.addEventListener("input", isFormValid);

// Set Attributes

function isValidUser() {
  let isTrue;
  const regex = /^[a-zA-Z]{6,}$/;
  isTrue = regex.test(user.value);
  if (!isTrue) {
    userFB.textContent = "Contains only letters. Atleast 6 characters long.";
    userFB.style.color = "red";
  } else {
    userFB.style.color = "green";
    userFB.textContent = "Accepted";
    isValid++;
  }
}

function isValidPass() {
  let isTrue;
  const regex = /^(?=.*[A-Z])(?=.*\d).{7,}$/;
  isTrue = regex.test(pass.value);
  if (!isTrue) {
    passFB.textContent =
      "At least 7 characters long and Contains At least 1 number, 1 capital letter.";
    passFB.style.color = "red";
  } else {
    passFB.style.color = "green";
    passFB.textContent = "Accepted";
    isValid++;
  }
  if (pass.value != verify.value) {
    verifyFB.textContent = "Passwords don't match.";
    verifyFB.style.color = "red";
  } else {
    verifyFB.style.color = "green";
    verifyFB.textContent = "Accepted";
    isValid++;
  }
}
function isFormValid() {
  if (
    userFB.style.color == "green" &&
    passFB.style.color == "green" &&
    verifyFB.style.color == "green"
  ) {
    createAccount.removeAttribute("disabled");
  } else {
    createAccount.setAttribute("disabled", "");
  }
}
