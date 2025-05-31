function rando() {
  let values = ["one", "two", "three", "four", "five", "six"];
  let index = Math.floor(Math.random() * values.length);
  let index2 = Math.floor(Math.random() * values.length);
  let value = values[index];
  let value2 = values[index2];
  document.getElementById("roll").innerHTML = "Reroll";
  dice1.setAttribute("class", "");
  dice2.setAttribute("class", "");
  dice1.classList.add(value);
  dice2.classList.add(value2);
  console.log(value);
  console.log(value2);
  let total = index + 1 + index2 + 1;
  document.getElementById("message").innerHTML = "You rolled " + total;
  if (total < 6) {
    document.getElementById("taunt").innerHTML = "Why even roll 2 dice?";
  } else if (total == 6) {
    document.getElementById("taunt").innerHTML = "Suprisingly average.";
  } else if (total > 6) {
    document.getElementById("taunt").innerHTML = "Rollin hot Hot HOT!";
  }
  if (index == index2 && value != "") {
    document.getElementById("doubles").setAttribute("class", "");
  } else {
    document.getElementById("doubles").setAttribute("class", "doubles");
  }
}
