/*
the concept of the visuals
    a hot air balloon character
    trees in the edges
    green grass as ground
    blue sky
    clouds

the mechanics
    press the space bar to add fuel to make balloon go up
    implement gravity/velocity
    end the game if character collides with the obstacles
*/

let x = 375;
let y = 375;
let speed = 2;

function setup() {
  createCanvas(600, 600);
}

function character(x, y) {
  scale(0.5);
  background(192, 221, 235);
  strokeWeight(3);

  //rope
  stroke(69, 54, 39);
  line(x - 25, y + 25, x - 25, y + 70);
  line(x, y + 25, x, y + 70);
  line(x + 25, y + 25, x + 25, y + 70);

  //basket
  fill(196, 164, 112);
  stroke(69, 54, 39);
  rect(x - 25, y + 70, 50);
  //basket ends
  fill(163, 127, 93);
  rect(x - 30, y + 70, 60, 10, 20);
  rect(x - 30, y + 120, 60, 10, 20);

  //balloon
  fill(114, 88, 163);
  stroke(59, 44, 87);
  ellipse(x, y - 80, 150);
  quad(x - 69, y - 50, x + 69, y - 50, x + 25, y + 25, x - 25, y + 25);

  //balloon_decor
  noStroke();
  fill(114, 88, 163);
  quad(x - 68, y - 52, x + 68, y - 52, x + 23, y + 23, x - 23, y + 23);
  fill(250, 241, 222);
  quad(x, y - 52, x + 68, y - 52, x, y + 23, x + 23, y + 23);
  quad(x - 68, y - 52, x, y - 52, x - 23, y + 23, x, y + 23);
  quad(x, y - 52, x + 56, y - 128, x, y - 153, x + 68, y - 52);
  quad(x - 68, y - 52, x, y - 153, x - 55, y - 128, x, y - 52);

  //bags
  fill(242, 174, 56);
  stroke(163, 105, 42);
  strokeWeight(3);
  ellipse(x, y + 90, 10, 15);
  ellipse(x - 25, y + 90, 10, 15);
  ellipse(x + 25, y + 90, 10, 15);
}

function draw() {
  background(192, 221, 235);
  character(x, y);

  frameRate(60);

  y = y + speed;
  if (y > 500) {
    speed = speed * -1;
  } else if (y < 200) {
    speed = speed * -1;
  }
}
