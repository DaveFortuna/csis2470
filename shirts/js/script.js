class Blouse {
  #size;
  #color;
  #pocket;
  #img;
  #text;
  #qty;

  constructor(
    size = "S",
    color = "",
    pocket = "No Pocket",
    img = "No Image",
    text = "No Text",
    qty = 0
  ) {
    this.size = size;
    this.color = color;
    this.pocket = pocket;
    this.img = img;
    this.text = text;
    this.qty = qty;
  }
  set qty(q) {
    this.#qty = q;
  }
  set size(s) {
    this.#size = s;
  }
  set color(c) {
    this.#color = c;
  }
  set pocket(p) {
    this.#pocket = p;
  }
  set img(i) {
    this.#img = i;
  }
  set text(t) {
    this.#text = t;
  }
  get qty() {
    return this.#qty;
  }
  get size() {
    return this.#size;
  }
  get color() {
    return this.#color;
  }
  get pocket() {
    return this.#pocket;
  }
  get img() {
    return this.#img;
  }
  get text() {
    return this.#text;
  }
  equals(other) {
    return (
      // other instanceof Blouse &&
      this.size === other.size &&
      this.color === other.color &&
      this.pocket === other.pocket &&
      this.img === other.img &&
      this.text === other.text
    );
  }
}
// ELEMENTS
let start = document.querySelector(".start");
let controlWindow = document.querySelector(".shirt-bg");
let radios = document.querySelectorAll('input[type="radio"]');
let checkOut = document.querySelector(".checkout");
let cartButton = document.querySelector(".cart-box");
let cart = document.querySelector(".cart");
let ordered = document.querySelector(".item-ordered");
let form = document.querySelector("form");
let processOrder = document.querySelector(".order-button");
let cartNum = document.querySelector(".item-num");
let itemList = document.querySelector(".item-list");
// shirt variables
let blouse;
let shirts = [];
// validation
let firstName = document.querySelector(".fname");
let lastName = document.querySelector(".lname");
let address = document.querySelector(".address");
let apt = document.querySelector(".apt");
let city = document.querySelector(".city");
let state = document.querySelector(".state");
let zip = document.querySelector(".zip");
let phone = document.querySelector(".telephone");
// pocket placement
let lPocket = document.getElementById("l-pocket");
let rPocket = document.getElementById("r-pocket");
let noPocket = document.getElementById("no-pocket");
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
let ba = document.querySelector(".bloodAngels");
let ec = document.querySelector(".emperorsChildren");
let ih = document.querySelector(".ironHands");
let sw = document.querySelector(".spaceWolves");
let removeImg = document.getElementById("remove-img");
let customText = document.getElementById("custom-text");
// shirt
let shirt = document.getElementById("shirt-body");
let pocket = document.getElementById("pocket");
let lSleeve = document.getElementById("left-sleeve");
let rSleeve = document.getElementById("right-sleeve");
let logo = document.getElementById("shirt-img");
// EVENT LISTENERS
color.addEventListener("change", changeColor);
noPocket.addEventListener("change", placePocket);
lPocket.addEventListener("change", placePocket);
rPocket.addEventListener("change", placePocket);
sizeS.addEventListener("change", changeSize);
sizeM.addEventListener("change", changeSize);
sizeL.addEventListener("change", changeSize);
sizeXL.addEventListener("change", changeSize);
sizeS.addEventListener("change", placePocket);
sizeM.addEventListener("change", placePocket);
sizeL.addEventListener("change", placePocket);
sizeXL.addEventListener("change", placePocket);
bloodAngel.addEventListener("change", changeLogo);
emperorsChildren.addEventListener("change", changeLogo);
ironHands.addEventListener("change", changeLogo);
spaceWolf.addEventListener("change", changeLogo);
removeImg.addEventListener("change", changeLogo);
customText.addEventListener("input", addText);
customText.addEventListener("focus", addText);
firstName.addEventListener("input", isValidFName);
lastName.addEventListener("input", isValidLName);
address.addEventListener("input", isValidAddress);
apt.addEventListener("input", isValidApt);
city.addEventListener("input", isValidCity);
state.addEventListener("input", isValidState);
zip.addEventListener("input", isValidZip);
phone.addEventListener("input", isValidPhone);
firstName.addEventListener("input", areAllValid);
lastName.addEventListener("input", areAllValid);
address.addEventListener("input", areAllValid);
apt.addEventListener("input", areAllValid);
city.addEventListener("input", areAllValid);
state.addEventListener("input", areAllValid);
zip.addEventListener("input", areAllValid);
phone.addEventListener("input", areAllValid);

processOrder.addEventListener("click", () => {
  form.requestSubmit();
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function isInCart(shirt) {
  for (let i = 0; i < shirts.length; i++) {
    if (shirts[i].equals(shirt)) {
      return true;
    }
  }
  return false;
}
function placeOrder() {
  start.style.display = "none";
  checkOut.style.display = "none";
  controlWindow.style.display = "none";
  ordered.style.display = "block";
  let count = 0;
  for (let shirt of shirts) {
    count += shirt.qty;
  }
  ordered.innerHTML = `<p>Thank you ${firstName.value} ${lastName.value}. Your ${count} shirts will arrive at ${address.value} ASAP (usually takes about a week). If we have any questions, we will contact you at ${phone.value}. We appreciate your business. Take care and have a wonderful day!</p>`;

  cart.innerHTML = "<h1>Empty Cart<h1>";
  shirts.length = 0;
  cartNum.textContent = "0";
  console.log(shirts);
}
function itemToCart() {
  cart.innerHTML = "";
  for (let shirt of shirts) {
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <p>Shirt Size: ${shirt.size}</p>
      <p>Shirt Color: ${shirt.color}</p>
      <p>Pocket: ${shirt.pocket}</p>
      <p>Shirt Image: ${shirt.img}</p>
      <p>Shirt Text: ${shirt.text}</p>
      <p>Qty: ${shirt.qty}</p>
      <p>Cost Per: $20</p>
      <p>Total Cost: $${shirt.qty * 20}</p>
    `;
    cart.appendChild(cartItem);
  }

  let count = 0;
  for (let shirt of shirts) {
    count += shirt.qty;
  }
  let total = document.createElement("div");
  total.classList.add("cart-item");
  total.innerHTML = `<p>Cart Total: </p><p>$${count * 20}</p>`;
  cart.appendChild(total);

  cartNum.textContent = `${count}`;
}
function dragEnd() {
  if (isInCart(blouse)) {
    console.log("checking");
    for (let shirt of shirts) {
      if (shirt.equals(blouse)) {
        shirt.qty = shirt.qty + 1;
      }
    }
  } else {
    let tempShirt = new Blouse();
    tempShirt.size = blouse.size;
    tempShirt.color = blouse.color;
    tempShirt.pocket = blouse.pocket;
    tempShirt.img = blouse.img;
    tempShirt.text = blouse.text;
    tempShirt.qty = 1;

    shirts.push(tempShirt);
  }
  itemToCart();
  resetShirt();
}
function displayControls() {
  resetShirt();
  cartButton.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  cartButton.addEventListener("drop", dragEnd);
  start.style.display = "none";
  controlWindow.style.display = "flex";
  checkOut.style.display = "none";
}
function resetShirt() {
  blouse = new Blouse();
  radios.forEach((radio) => {
    radio.checked = false;
  });
  sizeS.checked = true;
  changeSize();
  changeColor();
  shirt.style.border = "none";
  logo.style.backgroundImage = "none";
  pocket.style.border = "none";
  customText.value = "";
  logo.style.innerText = "";

  logo.innerText = "";
}
function changeColor() {
  shirt.style.backgroundColor = color.value;
  pocket.style.backgroundColor = color.value;
  lSleeve.style.backgroundColor = color.value;
  rSleeve.style.backgroundColor = color.value;
  blouse.color = color.value;
}
function placePocket() {
  if (noPocket.checked) {
    pocket.style.visibility = "hidden";
    blouse.pocket = "No Pocket";
  } else pocket.style.visibility = "visible";
  if (sizeS.checked && lPocket.checked) {
    pocket.style.left = "40px";
    pocket.style.top = "85px";
    pocket.style.border = "solid black 1px";
    pocket.style.borderRadius = "0 0 20px 20px";
    blouse.pocket = "Left Pocket";
  }
  if (sizeS.checked && rPocket.checked) {
    pocket.style.left = "175px";
    pocket.style.top = "85px";
    pocket.style.border = "solid black 1px";
    pocket.style.borderRadius = "0 0 20px 20px";
    blouse.pocket = "Right Pocket";
  }
  if (sizeM.checked && lPocket.checked) {
    pocket.style.left = "40px";
    pocket.style.top = "85px";
    pocket.style.border = "solid black 1px";
    pocket.style.borderRadius = "0 0 20px 20px";
    blouse.pocket = "Left Pocket";
  }
  if (sizeM.checked && rPocket.checked) {
    pocket.style.left = "180px";
    pocket.style.top = "85px";
    pocket.style.border = "solid black 1px";
    pocket.style.borderRadius = "0 0 20px 20px";
    blouse.pocket = "Right Pocket";
  }
  if (sizeL.checked && lPocket.checked) {
    pocket.style.left = "40px";
    pocket.style.top = "85px";
    pocket.style.border = "solid black 1px";
    pocket.style.borderRadius = "0 0 20px 20px";
    pocket.blouse = "Left Pocket";
  }
  if (sizeL.checked && rPocket.checked) {
    pocket.style.left = "220px";
    pocket.style.top = "85px";
    pocket.style.border = "solid black 1px";
    pocket.style.borderRadius = "0 0 20px 20px";
    pocket.blouse = "Right Pocket";
  }
  if (sizeXL.checked && lPocket.checked) {
    pocket.style.left = "65px";
    pocket.style.top = "95px";
    pocket.style.border = "solid black 1px";
    pocket.style.borderRadius = "0 0 20px 20px";
    pocket.blouse = "Left Pocket";
  }
  if (sizeXL.checked && rPocket.checked) {
    pocket.style.left = "240px";
    pocket.style.top = "95px";
    pocket.style.border = "solid black 1px";
    pocket.style.borderRadius = "0 0 20px 20px";
    pocket.blouse = "Right Pocket";
  }
}
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
    logo.style.left = "44px";
    logo.style.bottom = "261px";
    blouse.size = "S";
  } else if (sizeM.checked) {
    shirt.className = "";
    pocket.className = "";
    lSleeve.className = "";
    rSleeve.className = "";
    shirt.classList.add("m-shirt-body");
    pocket.classList.add("m-pocket");
    lSleeve.classList.add("m-left-sleeve");
    rSleeve.classList.add("m-right-sleeve");
    logo.style.left = "58px";
    logo.style.bottom = "261px";
    blouse.size = "M";
  } else if (sizeL.checked) {
    shirt.className = "";
    pocket.className = "";
    lSleeve.className = "";
    rSleeve.className = "";
    shirt.classList.add("l-shirt-body");
    pocket.classList.add("l-pocket");
    lSleeve.classList.add("l-left-sleeve");
    rSleeve.classList.add("l-right-sleeve");
    logo.style.left = "74px";
    logo.style.bottom = "243px";
    blouse.size = "L";
  } else if (sizeXL.checked) {
    shirt.className = "";
    pocket.className = "";
    lSleeve.className = "";
    rSleeve.className = "";
    shirt.classList.add("xl-shirt-body");
    pocket.classList.add("xl-pocket");
    lSleeve.classList.add("xl-left-sleeve");
    rSleeve.classList.add("xl-right-sleeve");
    logo.style.left = "93px";
    logo.style.bottom = "250px";
    blouse.size = "XL";
  }
}
function changeLogo() {
  if (!(sizeS.checked || sizeM.checked || sizeL.checked || sizeXL.checked))
    return;

  logo.classList.add("logo-animate-out");

  logo.addEventListener("animationend", function handler() {
    logo.classList.remove("logo-animate-out");

    if (bloodAngels.checked) {
      logo.style.backgroundImage = "url(img/bloodangels.png)";
      blouse.img = "Blood-Angels";
      customText.disabled = true;
    } else if (emperorsChildren.checked) {
      logo.style.backgroundImage = "url(img/emperorschildren.png)";
      blouse.img = "Emperor's-Children";
      customText.disabled = true;
    } else if (ironHands.checked) {
      logo.style.backgroundImage = "url(img/ironhands.png)";
      blouse.img = "Iron-Hands";
      customText.disabled = true;
    } else if (spaceWolves.checked) {
      logo.style.backgroundImage = "url(img/spacewolves.png)";
      blouse.img = "Space-Wolves";
      customText.disabled = true;
    } else if (removeImg.checked) {
      logo.style.backgroundImage = "none";
      blouse.img = "No-Image";
      customText.disabled = false;
    }

    logo.classList.add("logo-animate-in");

    logo.addEventListener("animationend", function handlerIn() {
      logo.classList.remove("logo-animate-in");
      logo.removeEventListener("animationend", handlerIn);
    });

    logo.removeEventListener("animationend", handler);
  });
}
function addText() {
  if (sizeS.checked || sizeM.checked || sizeL.checked || sizeXL.checked)
    if (
      (!bloodAngels.checked &&
        !emperorsChildren.checked &&
        !ironHands.checked &&
        !spaceWolves.checked) ||
      removeImg.checked
    ) {
      logo.innerText = customText.value;
      if (customText.value != "") {
        bloodAngel.disabled = true;
        emperorsChildren.disabled = true;
        ironHands.disabled = true;
        spaceWolf.disabled = true;
        sw.style.opacity = "0.5";
        ba.style.opacity = "0.5";
        ec.style.opacity = "0.5";
        ih.style.opacity = "0.5";
        blouse.text = customText.value;
      } else if (customText.value == "") {
        bloodAngel.disabled = false;
        emperorsChildren.disabled = false;
        ironHands.disabled = false;
        spaceWolf.disabled = false;
        sw.style.opacity = "1";
        ba.style.opacity = "1";
        ec.style.opacity = "1";
        ih.style.opacity = "1";
        blouse.text = "No-Text";
      }
    }
}
function isValidFName() {
  let isValid;
  const regex = /^[A-Za-z]{1,}$/;
  isValid = regex.test(firstName.value);
  if (!isValid) {
    firstName.style.backgroundColor = "red";
  } else {
    firstName.style.backgroundColor = "#77DD77";
    firstName.style.color = "black";
  }
  return isValid;
}
function isValidLName() {
  let isValid;
  const regex = /^[A-Za-z]{1,}$/;
  isValid = regex.test(lastName.value);
  if (!isValid) {
    lastName.style.backgroundColor = "#FF6961";
  } else {
    lastName.style.backgroundColor = "#77DD77";
    lastName.style.color = "black";
  }
  return isValid;
}
function isValidAddress() {
  let isValid;
  const regex = /^[A-Za-z0-9 ]{1,}$/;
  isValid = regex.test(address.value);
  if (!isValid) {
    address.style.backgroundColor = "#FF6961";
  } else {
    address.style.backgroundColor = "#77DD77";
    address.style.color = "black";
  }
  return isValid;
}
function isValidApt() {
  let isValid;
  const regex = /^(?:#\d*)?$/;
  isValid = regex.test(apt.value);
  if (!isValid) {
    apt.style.backgroundColor = "#FF6961";
  } else {
    apt.style.backgroundColor = "#77DD77";
    apt.style.color = "black";
  }
  return isValid;
}
function isValidCity() {
  let isValid;
  const regex = /^[A-Za-z ]{1,}$/;
  isValid = regex.test(city.value);
  if (!isValid) {
    city.style.backgroundColor = "#FF6961";
  } else {
    city.style.backgroundColor = "#77DD77";
    city.style.color = "black";
  }
  return isValid;
}
function isValidState() {
  let isValid;
  const regex = /^[A-Za-z ]{2,}$/;
  isValid = regex.test(state.value);
  if (!isValid) {
    state.style.backgroundColor = "#FF6961";
  } else {
    state.style.backgroundColor = "#77DD77";
    state.style.color = "black";
  }
  return isValid;
}
function isValidZip() {
  let isValid;
  const regex = /^\d{5}$/;
  isValid = regex.test(zip.value);
  if (!isValid) {
    zip.style.backgroundColor = "#FF6961";
  } else {
    zip.style.backgroundColor = "#77DD77";
    zip.style.color = "black";
  }
  return isValid;
}
function isValidPhone() {
  let isValid;
  const regex = /^\(\d{3}\) \d{3}-\d{4}$/;
  isValid = regex.test(phone.value);
  if (!isValid) {
    phone.style.backgroundColor = "#FF6961";
  } else {
    phone.style.backgroundColor = "#77DD77";
    phone.style.color = "black";
  }
  return isValid;
}
function areAllValid() {
  if (
    isValidFName() &&
    isValidLName() &&
    isValidAddress() &&
    isValidApt() &&
    isValidCity() &&
    isValidState() &&
    isValidZip() &&
    isValidPhone() &&
    shirts.length > 0
  ) {
    processOrder.removeAttribute("disabled");
  } else {
    processOrder.setAttribute("disabled", true);
  }
}
function toCart() {
  start.style.display = "none";
  checkOut.style.display = "grid";
  controlWindow.style.display = "none";
  ordered.style.display = "none";
}
