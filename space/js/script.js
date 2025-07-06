// inputs
let form = document.querySelector(".form");
let description = document.querySelector(".intro");
let headline = document.querySelector(".headline");
let fName = document.querySelector(".fname");
let lName = document.getElementById("last-name");
let rName = document.getElementById("robot-name");
let sName = document.getElementById("ship-name");
let pName = document.getElementById("planet-name");
let button = document.querySelector(".button");
let info = document.querySelector(".info");
let banner = document.querySelector(".h3");
button.disabled = "true";
// feebacks
let feedback = document.querySelector(".feedback");
let firstFB = document.querySelector(".first-fb");
let lastFB = document.querySelector(".last-fb");
let robotFB = document.querySelector(".robot-fb");
let shipFB = document.querySelector(".ship-fb");
let planetFB = document.querySelector(".planet-fb");
// event listeners
fName.addEventListener("input", isValidFName);
lName.addEventListener("input", isValidLName);
rName.addEventListener("input", isValidRName);
sName.addEventListener("input", isValidSName);
pName.addEventListener("input", isValidPName);
window.addEventListener("keyup", enableButton);
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
// form completed checks
let first;
let last;
let robot;
let ship;
let planet;

function isValidFName() {
  let isTrue;
  const regex = /^(?=[a-zA-Z]{5,}$)(?=.*[xXzZ])[a-zA-Z]+$/;
  isTrue = regex.test(fName.value);
  if (!isTrue) {
    firstFB.style.backgroundColor = "red";
    firstFB.textContent =
      "Must be atleast 5 characters long and contain X or Z";
    firstFB.style.fontSize = "16px";
    first = "false";
  } else {
    firstFB.style.backgroundColor = "green";
    firstFB.style.fontSize = "40px";
    firstFB.textContent = "Accepted";
    first = "true";
  }
}

function isValidLName() {
  let isTrue;
  const regex = /^(?=[a-zA-Z]{5,}$)(?=.*[xXzZ])[a-zA-Z]+$/;
  isTrue = regex.test(lName.value);
  if (!isTrue) {
    lastFB.style.fontSize = "16px";
    lastFB.style.backgroundColor = "red";
    lastFB.textContent = "Must be atleast 5 characters long and contain X or Z";
    last = "false";
  } else {
    lastFB.style.backgroundColor = "green";
    lastFB.textContent = "Accepted";
    lastFB.style.fontSize = "40px";
    last = "true";
  }
}
function isValidRName() {
  let isTrue;
  let isTaken = ["R2-D2", "BB-8", "C-3PO"];
  let inputUpper = rName.value.toUpperCase();
  const regex = /^([A-Z][0-9]-[A-Z][0-9]|[A-Z]{2}-[0-9]|[A-Z]-[0-9][A-Z]{2})$/i;
  isTrue = regex.test(rName.value);
  if (!isTrue) {
    {
      robotFB.style.backgroundColor = "red";
      robotFB.textContent =
        "Valid robot names must be in the following formats (LN-LN, LL-N, L-NLL) ";
      robotFB.style.fontSize = "16px";
      robot = "false";
    }
  } else {
    if (isTaken.includes(inputUpper)) {
      robotFB.style.backgroundColor = "red";
      robotFB.textContent = "This robot already exists.";
      robotFB.style.fontSize = "16px";
      robot = "false";
    } else {
      robotFB.style.backgroundColor = "green";
      robotFB.textContent = "Accepted";
      robotFB.style.fontSize = "40px";
      robot = "true";
    }
  }
}
function isValidSName() {
  let isTrue;
  let isTaken = ["HUNTER IV", "ICARUS I", "ICARUS II", "ZERO X", "TERRA V"];
  const regex = /^[a-zA-Z]{4,}\s(I|II|III|IV|V|VI|VII|VIII|IX|X)$/;
  isTrue = regex.test(sName.value);
  if (!isTrue) {
    {
      shipFB.style.backgroundColor = "red";
      shipFB.textContent =
        "Contain at least 4 letters followed by a space and a Roman Numerial between 1-10.";
      shipFB.style.fontSize = "16px";
      ship = "false";
    }
  } else {
    if (isTaken.includes(sName.value.toUpperCase())) {
      shipFB.style.backgroundColor = "red";
      shipFB.textContent = "This ship already exists.";
      shipFB.style.fontSize = "16px";
      ship = "false";
    } else {
      shipFB.style.backgroundColor = "green";
      shipFB.textContent = "Accepted";
      shipFB.style.fontSize = "40px";
      ship = "true";
    }
  }
}
function isValidPName() {
  let isTrue;
  let isTaken = [
    "EARTH",
    "MARS",
    "VENUS",
    "SATURN",
    "NEPTUNE",
    "URANUS",
    "MERCURY",
    "JUPITER",
    "PLUTO",
  ];
  const regex = /^[a-zA-Z]{5,}$/;
  isTrue = regex.test(pName.value);
  if (!isTrue) {
    {
      planetFB.style.backgroundColor = "red";
      planetFB.textContent = "Contains only letters, at least 5 from a-z.";
      planetFB.style.fontSize = "16px";
      planet = "false";
    }
  } else {
    if (isTaken.includes(pName.value.toUpperCase())) {
      planetFB.style.backgroundColor = "red";
      planetFB.textContent = "This planet already exists.";
      planetFB.style.fontSize = "16px";
      planet = "false";
      console.log(planet);
    } else {
      planetFB.style.backgroundColor = "green";
      planetFB.textContent = "Accepted";
      planetFB.style.fontSize = "40px";
      planet = "true";
    }
  }
}
function enableButton() {
  if (
    first == "true" &&
    last == "true" &&
    robot == "true" &&
    planet == "true" &&
    ship == "true"
  ) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", true);
  }
}
function submitted() {
  lName.style.textDecoration = "underline";
  rName.style.textDecoration = "underline";
  sName.style.textDecoration = "underline";
  pName.style.textDecoration = "underline";
  fName.style.textDecoration = "underline";
  headline.textContent = "Submission Received!";
  banner.textContent = "Welcome, Future Planet Jumper!";
  form.style.display = "none";
  feedback.style.display = "none";
  info.innerHTML =
    " Most excellent! <span>" +
    fName.value +
    " " +
    lName.value +
    "</span> your submission to become a Planet Jumper has been received. It looks like your trusty robot <span>" +
    rName.value +
    "</span> will be by your side. Useful things those robots. Your ship the <span>" +
    sName.value +
    "</span> is being looked over and made ready for launch to the planet <span>" +
    pName.value +
    "</span>. That is an interesting planet you are going to visit. Never been there myself. And I wouldn't be looking forward to it if I was. Good luck on your adventure, jumper. We're hoping you make it! ";
}
