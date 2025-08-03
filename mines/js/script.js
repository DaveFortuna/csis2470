let sound = new Audio("sounds/explosion.mp3");
let delay = 1500;
let soundPlayed = false;
let pencil, world, base, randX, randY;
let mines = [];
let stars = [];
window.addEventListener("resize", setup);
setup();
draw();
img = document.querySelector("img");

function setup() {
  window.addEventListener("keydown", moveShip);
  world = document.querySelector("canvas");
  world.width = window.innerWidth;
  world.height = window.innerHeight;
  pencil = world.getContext("2d");

  // place space ship

  ship = {
    x: undefined,
    y: undefined,
    h: 90,
    w: 87,
    xSpeed: 10,
    ySpeed: 10,
    style: document.querySelector("img"),
  };
  ship.x = world.width / 2 - ship.w / 2;
  ship.y = world.height - 95;

  // makes 100 randomly placed "stars"
  stars = [];
  for (let i = 0; i < 100; i++) {
    randX = Math.random() * world.width;
    randY = Math.random() * world.height;
    randR = Math.random() * 3;

    let s = new Ball(pencil, randX, randY, randR);
    stars.push(s);
    s.show();
  }
  // make home base
  randX = Math.random() * (world.width - 300);
  randY = Math.random() * (world.height - 200) - ship.h;

  base = new Rectangle(pencil, randX, randY, 300, 200, "purple");
  base.show();
  // Make mines
  mines = [];
  for (let i = 0; i < 30; i++) {
    randX = Math.random() * (world.width - 50);
    randY = Math.random() * (world.height - 50);

    let m = new Rectangle(pencil, randX, randY, 50, 50, "grey");

    if (!m.overlap(base) && !m.overlap(ship)) {
      mines.push(m);
      m.show();
    }
  }
}
function draw() {
  pencil.clearRect(0, 0, world.width, world.height);
  requestAnimationFrame(draw);
  for (let star of stars) star.show();
  base.show();

  pencil.drawImage(ship.style, ship.x, ship.y);
  if (isHome()) endGame(true);
  else if (isExploded()) endGame(false);
  else for (let mine of mines) mine.show();
}

function Rectangle(pencil, x, y, w, h, c) {
  this.pencil = pencil;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;

  this.show = function () {
    this.pencil.beginPath();
    this.pencil.fillStyle = this.c;
    this.pencil.rect(this.x, this.y, this.w, this.h);
    this.pencil.fill();

    this.pencil.closePath();
  };

  this.overlap = function (o) {
    return !(
      o.x + o.w < this.x ||
      o.x > this.x + this.w ||
      o.y + o.h < this.y ||
      o.y > this.y + this.h
    );
  };
}
function Ball(pencil, x, y, r) {
  this.pencil = pencil;
  this.x = x;
  this.y = y;
  this.r = r;

  this.show = function () {
    this.pencil.beginPath();
    this.pencil.fillStyle = "white";
    this.pencil.shadowColor = "white";
    this.pencil.shadowOffsetX = 0;
    this.pencil.shadowOffsetY = 0;
    this.pencil.shadowBlur = 5;
    this.pencil.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.pencil.fill();

    this.pencil.closePath();
  };
}
function moveShip(e) {
  switch (e.code) {
    case "ArrowUp":
      ship.y -= ship.ySpeed;
      break;
    case "ArrowDown":
      ship.y += ship.ySpeed;
      break;
    case "ArrowLeft":
      ship.x -= ship.xSpeed;
      break;
    case "ArrowRight":
      ship.x += ship.xSpeed;
      break;
  }
}
function isHome() {
  return (
    ship.x > base.x &&
    ship.x + ship.w < base.x + base.w &&
    ship.y > base.y &&
    ship.y + ship.h < base.y + base.h
  );
}
function isExploded() {
  for (let mine of mines) {
    if (mine.overlap(ship)) return true;
  }
  return false;
}
function playAgain(e) {
  if (e.code == "Escape") {
    window.removeEventListener("keydown", playAgain);
    setup();
  }
}
function endGame(won) {
  window.removeEventListener("keydown", moveShip);
  window.addEventListener("keydown", playAgain);
  let winMessage = "Houston, Mission Accomplished!";
  let loseMessage = "Houston, We have a problem.";
  let replay = "Press ESC to start over.";
  let winLength = pencil.measureText(winMessage).width;
  let loseLength = pencil.measureText(loseMessage).width;
  let replayLength = pencil.measureText(replay).width;
  pencil.font = "50px fantasy";
  pencil.fillStyle = "lime";
  if (!won) {
    img.setAttribute("src", "img/crashed2.png");
    pencil.fillText(
      loseMessage,
      world.width / 2 - loseLength / 2,
      world.height / 2
    );
    if (!soundPlayed) {
      sound.loop = false;
      sound.play();
      soundPlayed = true;
    }
  } else {
    pencil.fillText(
      winMessage,
      world.width / 2 - winLength / 2,
      world.height / 2
    );
  }
  pencil.fillText(
    replay,
    world.width / 2 - replayLength / 2,
    world.height / 2 + 100
  );
}

/*



5 Position the spaceship image on the <canvas> at the bottom center.

6 Using the arrow keys, the ship will move up, down, left, or right.

7 If the ship collides with a mine, the game will end with the player "losing"
If the ship makes it into the home base rectangle, the game will end with the player "winning"

8 Display a winning or losing message in the middle of the <canvas> and remove all of the mines from the screen.

9 In either case, the arrow keys will no longer work.

10 Additionally, if the user presses the ESC key, the game will reset. The ESC key only works after the game is over, not during the game.

11 In addition to the above message, display a message letting them know that hitting "ESC" will reset the game

Do not use alert pop ups, or the console, or any HTML elements to display any of the text. */
