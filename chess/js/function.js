let lightThemes = ["light", "light1", "light2", "light3", "light4"];
let darkThemes = ["dark", "dark1", "dark2", "dark3", "dark4"];
let board = document.querySelector(".board-container");
let piecePics = document.getElementsByTagName("img");
let darkTheme = darkThemes[0];
let lightTheme = lightThemes[0];
let validImages = [
  "bishop-b.png",
  "bishop-w.png",
  "king-w.png",
  "king-b.png",
  "pawn-b.png",
  "pawn-w.png",
  "queen-w.png",
  "queen-b.png",
  "rook-b.png",
  "rook-w.png",
  "knight-w.png",
  "knight-b.png",
];
let colors = ["light", "dark"];

let positions = [
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "g1",
  "g2",
  "g3",
  "g4",
  "g5",
  "g6",
  "g7",
  "g8",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "h7",
  "h8",
];

let container = document.getElementById("boardContainer");

let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let numbers = ["8", "7", "6", "5", "4", "3", "2", "1"];

for (let row = 0; row < 10; row++) {
  for (let col = 0; col < 10; col++) {
    let square = document.createElement("div");

    // Top and Bottom Labels
    if (row === 0 || row === 9) {
      if (col > 0 && col < 9) {
        square.textContent = letters[col - 1];
        square.className = "label";

        if (row === 0) {
          square.classList.add("inverted");
        }
      }
    }

    // Left and Right Labels
    else if (col === 0 || col === 9) {
      square.textContent = numbers[row - 1];
      square.className = "label";
      if (col === 9) {
        square.classList.add("inverted");
      }
    }

    // Squares
    else {
      square.className = (row + col) % 2 === 0 ? "square1 " : "square2 ";
      square.className += (row + col) % 2 === 0 ? lightTheme : darkTheme;
      let file = letters[col - 1];
      let rank = numbers[row - 1];
      square.id = file + rank;
    }

    container.appendChild(square);
  }
  document.getElementById("rotate").disabled = true;
}
let lightSquare = document.querySelectorAll(".square1");
let darkSquare = document.querySelectorAll(".square2");

function changeTheme() {
  let random = Math.floor(Math.random() * lightThemes.length);
  let random2 = Math.floor(Math.random() * lightThemes.length);

  for (let square of lightSquare) {
    for (let i = 0; i < lightThemes.length; i++) {
      square.classList.remove(lightThemes[i]);
    }
    square.classList.add(lightThemes[random]);
  }
  for (let square of darkSquare) {
    for (let i = 0; i < darkThemes.length; i++) {
      square.classList.remove(darkThemes[i]);
    }
    square.classList.add(darkThemes[random2]);
  }
}

function rotateBoard() {
  if (board.classList.contains("inverted")) {
    document.getElementById("boardContainer").classList.remove("inverted");
    for (let i = 0; i < piecePics.length; i++) {
      piecePics[i].classList.remove("inverted");
    }
  } else {
    document.getElementById("boardContainer").classList.add("inverted");
    for (let i = 0; i < piecePics.length; i++) {
      piecePics[i].classList.add("inverted");
    }
  }
}

function setBoard() {
  document.getElementById("a2").innerHTML = '<img src="img/pawn-w.png"/>';
  document.getElementById("b2").innerHTML = '<img src="img/pawn-w.png"/>';
  document.getElementById("c2").innerHTML = '<img src="img/pawn-w.png"/>';
  document.getElementById("d2").innerHTML = '<img src="img/pawn-w.png"/>';
  document.getElementById("e2").innerHTML = '<img src="img/pawn-w.png"/>';
  document.getElementById("f2").innerHTML = '<img src="img/pawn-w.png"/>';
  document.getElementById("g2").innerHTML = '<img src="img/pawn-w.png"/>';
  document.getElementById("h2").innerHTML = '<img src="img/pawn-w.png"/>';
  document.getElementById("a7").innerHTML = '<img src="img/pawn-b.png"/>';
  document.getElementById("b7").innerHTML = '<img src="img/pawn-b.png"/>';
  document.getElementById("c7").innerHTML = '<img src="img/pawn-b.png"/>';
  document.getElementById("d7").innerHTML = '<img src="img/pawn-b.png"/>';
  document.getElementById("e7").innerHTML = '<img src="img/pawn-b.png"/>';
  document.getElementById("f7").innerHTML = '<img src="img/pawn-b.png"/>';
  document.getElementById("g7").innerHTML = '<img src="img/pawn-b.png"/>';
  document.getElementById("h7").innerHTML = '<img src="img/pawn-b.png"/>';

  document.getElementById("a1").innerHTML = '<img src="img/rook-w.png"/>';
  document.getElementById("h1").innerHTML = '<img src="img/rook-w.png"/>';
  document.getElementById("a8").innerHTML = '<img src="img/rook-b.png"/>';
  document.getElementById("h8").innerHTML = '<img src="img/rook-b.png"/>';

  document.getElementById("b1").innerHTML = '<img src="img/knight-w.png"/>';
  document.getElementById("g1").innerHTML = '<img src="img/knight-w.png"/>';
  document.getElementById("b8").innerHTML = '<img src="img/knight-b.png"/>';
  document.getElementById("g8").innerHTML = '<img src="img/knight-b.png"/>';

  document.getElementById("c1").innerHTML = '<img src="img/bishop-w.png"/>';
  document.getElementById("f1").innerHTML = '<img src="img/bishop-w.png"/>';
  document.getElementById("c8").innerHTML = '<img src="img/bishop-b.png"/>';
  document.getElementById("f8").innerHTML = '<img src="img/bishop-b.png"/>';

  document.getElementById("d1").innerHTML = '<img src="img/queen-w.png"/>';
  document.getElementById("d8").innerHTML = '<img src="img/queen-b.png"/>';

  document.getElementById("e1").innerHTML = '<img src="img/king-w.png"/>';
  document.getElementById("e8").innerHTML = '<img src="img/king-b.png"/>';

  document.getElementById("setBoard").disabled = true;
  document.getElementById("rotate").disabled = false;

  console.log(pieces);
}

//  Board pieces
class Piece {
  #name;
  #color;
  #position;
  #img;

  constructor(name, color, position, img) {
    this.name = name;
    this.color = color;
    this.position = position;
    this.img = img;
  }
  set name(n) {
    this.#name = n;
  }
  set color(c) {
    if (colors.includes(c)) {
      this.#color = c;
    } else {
      console.log("Invalid color. Must be either 'light' or 'dark'");
    }
  }
  set position(p) {
    if (positions.includes(p)) {
      this.#position = p;
    } else {
      console.log(
        "Invalid position. Must start with a letter a-h and end with a number 1-8"
      );
    }
  }
  set img(img) {
    if (validImages.includes(img)) {
      this.#img = img;
    } else {
      console.log("Invalid image.");
    }
  }
}
let pieces = [
  new Piece("LPawnA2", "light", "a2", "pawn-w.png"),
  new Piece("LPawnB2", "light", "b2", "pawn-w.png"),
  new Piece("LPawnC2", "light", "c2", "pawn-w.png"),
  new Piece("LPawnD2", "light", "d2", "pawn-w.png"),
  new Piece("LPawnE2", "light", "e2", "pawn-w.png"),
  new Piece("LPawnF2", "light", "f2", "pawn-w.png"),
  new Piece("LPawnG2", "light", "g2", "pawn-w.png"),
  new Piece("LPawnH2", "light", "h2", "pawn-w.png"),
  new Piece("DPawnA7", "dark", "a7", "pawn-b.png"),
  new Piece("DPawnB7", "dark", "b7", "pawn-b.png"),
  new Piece("DPawnC7", "dark", "c7", "pawn-b.png"),
  new Piece("DPawnD7", "dark", "d7", "pawn-b.png"),
  new Piece("DPawnE7", "dark", "e7", "pawn-b.png"),
  new Piece("DPawnF7", "dark", "f7", "pawn-b.png"),
  new Piece("DPawnG7", "dark", "g7", "pawn-b.png"),
  new Piece("DPawnH7", "dark", "h7", "pawn-b.png"),

  new Piece("LRookA1", "light", "a1", "rook-w.png"),
  new Piece("LRookH1", "light", "h1", "rook-w.png"),
  new Piece("DRookA8", "dark", "a8", "rook-b.png"),
  new Piece("DRookH8", "dark", "h8", "rook-b.png"),

  new Piece("LKnightB1", "light", "b1", "knight-w.png"),
  new Piece("LKnightG1", "light", "g1", "knight-w.png"),
  new Piece("DKnightB8", "dark", "b8", "knight-b.png"),
  new Piece("DKnightG8", "dark", "g8", "knight-b.png"),

  new Piece("LBishopC1", "light", "c1", "bishop-w.png"),
  new Piece("LBishopF1", "light", "f1", "bishop-w.png"),
  new Piece("DBishopC8", "dark", "c8", "bishop-b.png"),
  new Piece("DBishopF8", "dark", "f8", "bishop-b.png"),

  new Piece("LQueenD1", "light", "d1", "queen-w.png"),
  new Piece("DQueenD8", "dark", "d8", "queen-b.png"),

  new Piece("LKingE1", "light", "e1", "king-w.png"),
  new Piece("DKingE8", "dark", "e8", "king-b.png"),
];
