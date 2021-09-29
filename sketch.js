var ball;
var panelBottom, panelTop;
var scoreBottom = 0;
var scoreTop = 0;
var speedDisplayed;

function setup() {
  createCanvas(800, 800);

  ball = new Ball();
  panelBottom = new Panel(width / 2, height - 100);
  panelTop = new Panel(width / 2, 100)
}

function draw() {
  background(0);

  ball.move();
  ball.show();
  ball.bounce();
  ball.death();
  ball.hit();

  panelBottom.show();

  panelTop.show();

  score();

  displaySpeed();

  speedDisplayed = ball.speed - 1;
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    panelBottom.dir(-40);

  } else if(keyCode === RIGHT_ARROW) {
    panelBottom.dir(40);

  }
}

function keyTyped() {
  if(key === "a") {
    panelTop.dir(-40);
  } else if(key === "d") {
    panelTop.dir(40);
  }
}

function score() {
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text("Score: " + scoreBottom, width/ 2, height - 25);
  text("Score: " + scoreTop, width / 2, 25);
}

function displaySpeed() {
  textAlign(RIGHT);
  fill(255);
  textSize(20);
  text(speedDisplayed + "x", width - 25, height - 25);
}