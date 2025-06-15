// robot elements
let head = document.querySelector(".head");
let lEye = document.querySelector(".left-eye");
let rEye = document.querySelector(".right-eye");
let pupilL = document.querySelector(".pupilL");
let pupilR = document.querySelector(".pupilR");
let body = document.querySelector(".body");
let lArm = document.querySelector(".left-arm");
let rArm = document.querySelector(".right-arm");
let lLeg = document.querySelector(".left-leg");
let rLeg = document.querySelector(".right-leg");
let pupils = [pupilL, pupilR];
let eyes = [lEye, rEye];
let robotParts = [head, body, lArm, rArm, lLeg, rLeg];

// customize-panel elements
let sEdge = document.getElementById("sharp-edge");
let rEdge = document.getElementById("round-edge");
let safety = document.querySelectorAll('[name="safety"]');
let rHead = document.getElementById("round-head");
let sHead = document.getElementById("square-head");
let headShape = document.querySelectorAll('[name="head-shape"]');
let evil = document.getElementById("evil");
let good = document.getElementById("good");
let personality = document.querySelectorAll('[name= "personality"]');
let roundEye = document.getElementById("round-eye");
let squareEye = document.getElementById("square-eye");
let eyeStyle = document.querySelectorAll('[name="eye-style"]');
let eyeColor = document.getElementById("eye-color");
let robotColor = document.getElementById("robot-color");
let reset = document.getElementById("reset");
let randomRobot = document.getElementById("random-robot");
console.log(safety);

//event listeners
sEdge.addEventListener("change", removeRoundEdge);
rEdge.addEventListener("change", addRoundEdge);
rHead.addEventListener("change", makeHeadRound);
sHead.addEventListener("change", makeHeadSquare);
evil.addEventListener("change", evilEyes);
good.addEventListener("change", goodEyes);
roundEye.addEventListener("change", makeEyesRound);
squareEye.addEventListener("change", makeEyesSquare);
eyeColor.addEventListener("input", colorOfEyes);
robotColor.addEventListener("input", colorOfRobot);

//functions
function addRoundEdge() {
  for (let part of robotParts) {
    if (part.style.borderRadius != "50%") part.style.borderRadius = "10px";
  }
}
function removeRoundEdge() {
  for (let part of robotParts) {
    if (part.style.borderRadius != "50%") part.style.borderRadius = "0px";
  }
}
function makeHeadRound() {
  head.style.borderRadius = "50%";
}
function makeHeadSquare() {
  if (rEdge.checked) head.style.borderRadius = "10px";
  else head.style.borderRadius = "0%";
}
function makeEyesRound() {
  for (eye of eyes) {
    eye.style.borderRadius = "50%";
  }
}
function makeEyesSquare() {
  for (let eye of eyes) {
    eye.style.borderRadius = "0%";
  }
}
function evilEyes() {
  for (let pupil of pupils) {
    pupil.style.backgroundColor = "red";
  }
}
function goodEyes() {
  for (let pupil of pupils) {
    pupil.style.backgroundColor = "black";
  }
}
function colorOfEyes() {
  color = eyeColor.value;
  for (let eye of eyes) {
    eye.style.backgroundColor = color;
  }
}
function colorOfRobot() {
  color = robotColor.value;
  for (let part of robotParts) {
    part.style.backgroundColor = color;
  }
}
function random() {
  let randomIndex = Math.floor(Math.random() * safety.length);
  safety[randomIndex].checked = true;
  if (randomIndex == 0) {
    removeRoundEdge();
  } else addRoundEdge();

  randomIndex = Math.floor(Math.random() * headShape.length);
  headShape[randomIndex].checked = true;
  if (randomIndex == 1) {
    makeHeadRound();
  } else makeHeadSquare();

  randomIndex = Math.floor(Math.random() * personality.length);
  personality[randomIndex].checked = true;
  if (randomIndex == 1) {
    evilEyes();
  } else goodEyes();

  randomIndex = Math.floor(Math.random() * eyeStyle.length);
  eyeStyle[randomIndex].checked = true;
  if (randomIndex == 1) {
    makeEyesRound();
  } else makeEyesSquare();

  let randomHex =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  eyeColor.value = randomHex;
  for (let eye of eyes) {
    eye.style.backgroundColor = randomHex;
  }
  randomHex =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  robotColor.value = randomHex;
  for (let part of robotParts) {
    part.style.backgroundColor = randomHex;
  }
}
function defaultRobot() {
  removeRoundEdge();
  safety[0].checked = true;
  makeHeadSquare();
  headShape[0].checked = true;
  makeEyesSquare();
  eyeStyle[0].checked = true;
  goodEyes();
  personality[0].checked = true;
  for (let eye of eyes) {
    eye.style.backgroundColor = "#FFFFFF";
  }
  eyeColor.value = "#FFFFFF";
  for (let part of robotParts) {
    part.style.backgroundColor = "#C0C0C0";
  }
  robotColor.value = "#C0C0C0";
}
