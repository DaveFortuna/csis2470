let parts = document.querySelectorAll(".part");
let boxes = document.querySelectorAll(".part-box");
let fiveSeconds = document.querySelector(".five-seconds");
let tenSeconds = document.querySelector(".ten-seconds");
let forever = document.querySelector(".forever-seconds");
let startButton = document.querySelector(".start-assembly");
let randomParts = document.querySelector(".random-parts");
let clock = document.querySelector(".clock");
let banner = document.querySelector(".banner");
let robotTimer;
let intervalID;
let robotPart;
let partsPlaced = 0;

for (part of parts) {
  part.addEventListener("dragstart", dragStart);
  part.addEventListener("dragend", function () {
    robotPart.classList.remove("hover");
  });
  part.addEventListener("drop", dropped);
}
for (box of boxes) {
  box.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  box.addEventListener("dragenter", function (e) {
    e.srcElement.classList.toggle("hover");
  });
  box.addEventListener("dragleave", function (e) {
    e.srcElement.classList.toggle("hover");
  });
  box.addEventListener("drop", dropped);
}
function dragStart(e) {
  robotPart = e.target;
  robotPart.classList.add("hover");
}
function dropped(e) {
  let dataBox = e.srcElement.attributes["data-box"].nodeValue;
  let dataPart = robotPart.attributes["data-part"].nodeValue;
  if (dataBox == dataPart) {
    e.target.innerText = "";
    e.target.style.border = "none";
    e.target.appendChild(robotPart);
    robotPart.attributes["draggable"].nodeValue = false;
    partsPlaced++;
    if (partsPlaced == 5) {
      clearInterval(intervalID);
      for (box of boxes) {
        if (box.classList.contains("head")) {
          box.style.top = "18px";
          box.style.right = "3px";
        }
        if (box.classList.contains("left-arm")) {
          box.style.bottom = "44px";
          box.style.left = "15px";
        }
        if (box.classList.contains("right-arm")) {
          box.style.bottom = "44px";
          box.style.right = "29px";
        }
        if (box.classList.contains("bolt")) {
          box.style.bottom = "38px";
          box.style.right = "8px";
        }
      }
      banner.textContent = "Hurray you have assembled Robo!!";
      clock.style.fontSize = "24px";
      clock.textContent = "Smooth assembly!";
    }
  }
  e.target.classList.remove("hover");
}
function start() {
  let timer = document.querySelector('input[name="select-time"]:checked').value;
  robotTimer = timer;
  if (timer != "") {
    clock.textContent = robotTimer;
    intervalID = setInterval(countDown, 1000);
  } else {
    clock.style.fontSize = "22px";
    clock.textContent = "Assemble at your leasure.";
  }

  for (box of boxes) {
    box.style.visibility = "visible";
  }
  for (part of parts) {
    part.style.visibility = "visible";
  }
  fiveSeconds.style.visibility = "hidden";
  tenSeconds.style.visibility = "hidden";
  forever.style.visibility = "hidden";
  startButton.style.display = "none";
  clock.style.display = "block";
}
function countDown() {
  robotTimer--;
  clock.textContent = robotTimer;
  if (robotTimer == 0) {
    clearInterval(intervalID);
    randomParts.style.display = "none";
    banner.textContent = "Oh no. You didn't assemble Robo in time. :(";
    clock.textContent = "Out of Time.";
    clock.style.fontSize = "24px";
  }
}
