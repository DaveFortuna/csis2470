let flip = document.getElementById("flip");
let shuffle = document.getElementById("shuffle");
let deck = document.querySelector(".deck");
let timer = 0;
let delay = 250;
let prevent = false;
let deckId = "";

shuffle.disabled = true;

function createDeck() {
  deck.innerHTML = "";

  for (let i = 0; i < 52; i++) {
    let card = document.createElement("img");
    card.src = "img/back.png";
    card.alt = "back of playing card";
    card.classList.add("card");

    card.style.position = "absolute";
    card.style.left = "-55px";
    card.style.zIndex = i;

    card.addEventListener("click", doSingleClick);
    card.addEventListener("animationend", animationEnd);

    deck.appendChild(card);
  }

  animateFanOut();
}

function shuffleDeck() {
  let x = new XMLHttpRequest();
  x.open(
    "GET",
    "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  x.send();
  x.addEventListener("readystatechange", () => {
    if (x.readyState === 4 && x.status === 200) {
      let response = JSON.parse(x.responseText);
      deckId = response.deck_id;
    }
  });
}

function doSingleClick(event) {
  let card = event.currentTarget;
  if (card.dataset.flipped === "true") return;
  timer = setTimeout(() => {
    if (!prevent) click(card);
    prevent = false;
  }, delay);
}

function doDoubleClick(event) {
  clearTimeout(timer);
  prevent = true;
  dblClick(event.currentTarget);
}

function click(cardElement) {
  cardElement.classList.toggle("move-up");
  cardElement.classList.toggle("selected");
  if (cardElement.classList.contains("move-up")) {
    cardElement.addEventListener("dblclick", doDoubleClick);
  } else {
    cardElement.removeEventListener("dblclick", doDoubleClick);
  }
}

function dblClick(cardElement) {
  if (!deckId) return;
  if (cardElement.dataset.flipped === "true") return;
  let x = new XMLHttpRequest();
  x.open(
    "GET",
    `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  );
  x.send();
  x.addEventListener("readystatechange", () => {
    if (x.readyState === 4 && x.status === 200) {
      let data = JSON.parse(x.responseText);
      if (data.success && data.cards.length > 0) {
        cardElement.src = data.cards[0].image;
        cardElement.dataset.flipped = "true";
        cardElement.removeEventListener("click", doSingleClick);
        cardElement.removeEventListener("dblclick", doDoubleClick);
        cardElement.classList.remove("move-up");
        cardElement.classList.add("no-hover");
      }
    }
  });
  cardElement.classList.add("selected");
}

function animationEnd(event) {
  event.currentTarget.classList.remove("selected");
}

flip.addEventListener("click", () => {
  if (!deckId) return;
  let cards = deck.querySelectorAll("img");
  let faceDownCards = Array.from(cards).filter(
    (card) => card.dataset.flipped !== "true"
  );
  let count = faceDownCards.length;
  if (count === 0) return;

  let x = new XMLHttpRequest();
  x.open(
    "GET",
    `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`
  );
  x.send();
  x.addEventListener("readystatechange", () => {
    if (x.readyState === 4 && x.status === 200) {
      let data = JSON.parse(x.responseText);
      if (data.success && data.cards.length > 0) {
        data.cards.forEach((cardData, index) => {
          let cardElement = faceDownCards[index];
          if (cardElement) {
            cardElement.src = cardData.image;
            cardElement.dataset.flipped = "true";
            cardElement.classList.remove("move-up");
            cardElement.removeEventListener("click", doSingleClick);
            cardElement.removeEventListener("dblclick", doDoubleClick);
          }
        });
        flip.disabled = true;
        shuffle.disabled = false;
      }
    }
  });
});

shuffle.addEventListener("click", handleShuffleClick);

function handleShuffleClick() {
  let cards = deck.querySelectorAll("img");
  let x = new XMLHttpRequest();

  x.open(
    "GET",
    "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  x.send();
  x.onreadystatechange = function () {
    if (x.readyState === 4 && x.status === 200) {
      let response = JSON.parse(x.responseText);
      deckId = response.deck_id;

      let y = new XMLHttpRequest();
      y.open(
        "GET",
        "https://www.deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=52"
      );
      y.send();
      y.onreadystatechange = function () {
        if (y.readyState === 4 && y.status === 200) {
          let data = JSON.parse(y.responseText);
          if (data.success && data.cards.length > 0) {
            for (let i = 0; i < data.cards.length; i++) {
              let cardData = data.cards[i];
              let cardElement = cards[i];
              if (cardElement) {
                cardElement.src = cardData.image;
                cardElement.dataset.flipped = "true";
                cardElement.classList.remove("move-up", "selected");
                cardElement.removeEventListener("click", doSingleClick);
                cardElement.removeEventListener("dblclick", doDoubleClick);
              }
            }
          }
        }
      };
    }
  };
}

window.onload = () => {
  createDeck();
  shuffleDeck();
};
function animateFanOut() {
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    (function (index) {
      setTimeout(function () {
        cards[index].style.left = -55 + index * 28 + "px";
      }, index * 21);
    })(i);
  }
}
