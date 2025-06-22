// Elements
let robot = document.getElementById("robot");
let robotTop = 240;
let robotLeft = 400;
let instructions = document.querySelector(".movement");
let headline = document.querySelector(".headline");
let box = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");

// KeyListeners
// Functions

function moveRobot(e) {
  let pressed = e.key;
  if (pressed == "ArrowUp") {
    if (robotTop > 0 || (robotTop == 0 && robotLeft == 400)) {
      robotTop -= 80;
      robot.style.top = robotTop + "px";
    }
  } else if (pressed == "ArrowRight") {
    if (robotLeft < 800 || (robotLeft == 800 && robotTop == 240)) {
      robotLeft += 80;
      robot.style.left = robotLeft + "px";
    }
  } else if (pressed == "ArrowDown") {
    if (robotTop < 480 || (robotTop == 480 && robotLeft == 400)) {
      robotTop += 80;
      robot.style.top = robotTop + "px";
    }
  } else if (pressed == "ArrowLeft") {
    if (robotLeft > 0 || (robotLeft == 0 && robotTop == 240)) {
      robotLeft -= 80;
      robot.style.left = robotLeft + "px";
    }
  }
  if (robotTop == -80 && robotLeft == 400) {
    robotTop -= 50;
    robot.style.top = robotTop + "px";
    winGame();
  } else if (robotTop == 240 && robotLeft == 880) {
    robotLeft += 50;
    robot.style.left = robotLeft + "px";
    winGame();
  } else if (robotTop == 560 && robotLeft == 400) {
    robotTop += 50;
    robot.style.top = robotTop + "px";
    winGame();
  } else if (robotTop == 240 && robotLeft == -80) {
    robotLeft -= 50;
    robot.style.left = robotLeft + "px";
    winGame();
  }
}
function winGame() {
  resetButton.style.visibility = "visible";
  document.removeEventListener("keydown", moveRobot);
  robot.style.scale = 2;
  robot.style.transform = "rotate(360deg)";
  instructions.innerHTML =
    "Thank you! You have freed me from endlessly bumping into walls.";
  document.querySelector(".headline").innerHTML = "You did it!";
}

function start() {
  document.addEventListener("keydown", moveRobot);
  instructions.innerHTML = "";
  for (let i = 0; i < 77; i++) {
    box[i].style.backgroundColor = "white";
  }
  document.querySelector(".start").disabled = true;
}
function reset() {
  resetButton.style.visibility = "hidden";
  document.querySelector(".start").disabled = false;
  robot.style.scale = 1;
  robot.style.transform = "none";
  instructions.innerHTML =
    "Robo the Robot will move in a direction using the <span>arrow keys</span>. Click Start to begin!";
  headline.innerHTML = "Can you help Robo Escape?";
  robotTop = 240;
  robotLeft = 400;
  robot.style.top = 240 + "px";
  robot.style.left = 400 + "px";
  for (let i = 0; i < 77; i++) {
    box[i].style.backgroundColor = "slategrey";
  }
}

// when robo escapes (celebrate)
// make activateButton()
// make reset()
