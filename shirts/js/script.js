// ELEMENTS
// pocket
let lPocket = document.getElementById("l-pocket");
let rPocket = document.getElementById("r-pocket");
// color
let color = document.querySelector('input[type="color"]');
// size
let sizeS = document.getElementById("size-s");
let sizeM = document.getElementById("size-m");
let sizeL = document.getElementById("size-l");
let sizeXL = document.getElementById("size-xl");
// logo
let bloodAngel = document.getElementById("bloodAngels");
let emperorsChildren = document.getElementById("emperorsChildren");
let ironHands = document.getElementById("ironHands");
let spaceWolf = document.getElementById("spaceWolves");
let customText = document.getElementById("custom-text");
// shirt
let shirt = document.getElementById("shirt-body");
let pocket = document.getElementById("pocket");
let lSleeve = document.getElementById("left-sleeve");
let rSleeve = document.getElementById("right-sleeve");
let logo = document.getElementById("shirt-img");
// EVENT LISTENERS
color.addEventListener("input", changeColor);
// lPocket.addEventListener("change", placePocket);
// rPocket.addEventListener("change", placePocket);
sizeS.addEventListener("change", changeSize);
sizeM.addEventListener("change", changeSize);
sizeL.addEventListener("change", changeSize);
sizeXL.addEventListener("change", changeSize);
bloodAngel.addEventListener("change", changeLogo);
emperorsChildren.addEventListener("change", changeLogo);
ironHands.addEventListener("change", changeLogo);
spaceWolf.addEventListener("change", changeLogo);

function changeColor() {
  shirt.style.backgroundColor = color.value;
  pocket.style.backgroundColor = color.value;
  lSleeve.style.backgroundColor = color.value;
  rSleeve.style.backgroundColor = color.value;
}

function placePocket() {}

function changeSize() {
  if (sizeS.checked) {
    shirt.className = "";
    pocket.className = "";
    lSleeve.className = "";
    rSleeve.className = "";
    shirt.classList.add("s-shirt-body");
    pocket.classList.add("s-pocket");
    lSleeve.classList.add("s-left-sleeve");
    rSleeve.classList.add("s-right-sleeve");
    // logo.style.left = "44px";
    // logo.style.bottom = "261px";
  }
  if (sizeM.checked) {
    shirt.className = "";
    pocket.className = "";
    lSleeve.className = "";
    rSleeve.className = "";
    shirt.classList.add("m-shirt-body");
    pocket.classList.add("m-pocket");
    lSleeve.classList.add("m-left-sleeve");
    rSleeve.classList.add("m-right-sleeve");
    // logo.style.left = "58px";
    // logo.style.bottom = "261px";
  }
  if (sizeL.checked) {
    shirt.className = "";
    pocket.className = "";
    lSleeve.className = "";
    rSleeve.className = "";
    shirt.classList.add("l-shirt-body");
    pocket.classList.add("l-pocket");
    lSleeve.classList.add("l-left-sleeve");
    rSleeve.classList.add("l-right-sleeve");
    // logo.style.left = "74px";
    // logo.style.bottom = "243px";
  }
  if (sizeXL.checked) {
    shirt.className = "";
    pocket.className = "";
    lSleeve.className = "";
    rSleeve.className = "";
    shirt.classList.add("xl-shirt-body");
    pocket.classList.add("xl-pocket");
    lSleeve.classList.add("xl-left-sleeve");
    rSleeve.classList.add("xl-right-sleeve");
    // logo.style.left = "93px";
    // logo.style.bottom = "250px";
  }
}
function changeLogo() {
  if (bloodAngels.checked) {
    logo.style.backgroundImage = "url(img/bloodangels.png)";
  }
  if (emperorsChildren.checked) {
    logo.style.backgroundImage = "url(img/emperorschildren.png)";
  }
  if (ironHands.checked) {
    logo.style.backgroundImage = "url(img/ironhands.png)";
  }
  if (spaceWolves.checked) {
    logo.style.backgroundImage = "url(img/spacewolves.png)";
  }
}
function addText() {}
