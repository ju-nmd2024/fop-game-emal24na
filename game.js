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

let characterX = 375;
let characterY = 375;
let speed = 4;

function setup() {
  createCanvas(600, 600);
}

function mainMenu() {
  background(192, 221, 235);
  //ground
  noStroke();
  fill(103, 163, 103);
  rect(0, 500, 600, 100);
  //path
  fill(100);
  quad(350, 500, 250, 500, 200, 600, 400, 600);
  //clouds
  fill(255);
  ellipse(100, 100, 150, 60);
  ellipse(130, 60, 130, 60);
  ellipse(200, 90, 80, 60);
  ellipse(500, 120, 150, 60);
  ellipse(450, 100, 130, 60);
  ellipse(400, 110, 100, 60);
  ellipse(540, 90, 100, 60);
  //trees
  push();
  scale(1.5);
  translate(370, 230);
  treeDark();
  pop();
  push();
  scale(1.5);
  translate(10, 210);
  treeDark();
  pop();
  push();
  scale(1.1);
  translate(120, 350);
  treeDark();
  pop();
  push();
  scale(1.1);
  translate(390, 335);
  treeDark();
  pop();
  push();
  translate(80, 430);
  treeLight();
  pop();
  push();
  scale(1.3);
  translate(380, 300);
  treeLight();
  pop();
  strokeWeight(5);
  stroke(100);
  textSize(48);
  text("HOT AIR", 200, 160);
  textSize(60);
  text("BALLOON", 160, 215);
  textSize(48);
  text("RESCUE", 200, 260);
  noStroke();
  rect(200, 300, 200, 100, 30);
  rect(200, 420, 200, 100, 30);
  fill(50);
  textSize(20);
  text("PLAY GAME", 243, 360);
  text("INSTRUCTIONS", 224, 476);
}

function treeDark(x, y) {
  fill(66, 53, 41);
  rect(-5, 100, 20, 40);
  fill(37, 61, 35);
  ellipse(0, 65, 70, 100);
  ellipse(0, 20, 70);
  ellipse(20, 65, 70);
  ellipse(-20, 50, 50);
  ellipse(-20, 80, 50);
  ellipse(30, 30, 50);
}

function treeLight(x, y) {
  fill(66, 53, 41);
  rect(-5, 100, 20, 40);
  fill(71, 110, 68);
  ellipse(0, 65, 70, 100);
  ellipse(0, 20, 70);
  ellipse(20, 65, 70);
  ellipse(-20, 50, 50);
  ellipse(-20, 80, 50);
  ellipse(30, 30, 50);
}

function gameBackground() {
  background(192, 221, 235);
  //ground
  noStroke();
  fill(103, 163, 103);
  rect(0, 500, 600, 100);
  //path
  fill(100);
  quad(350, 500, 250, 500, 200, 600, 400, 600);
  //clouds
  fill(255);
  ellipse(100, 100, 150, 60);
  ellipse(130, 60, 130, 60);
  ellipse(200, 90, 80, 60);
  ellipse(500, 120, 150, 60);
  ellipse(450, 100, 130, 60);
  ellipse(400, 110, 100, 60);
  ellipse(540, 90, 100, 60);
  //trees
  push();
  scale(1.5);
  translate(370, 230);
  treeDark();
  pop();
  push();
  scale(1.5);
  translate(10, 210);
  treeDark();
  pop();
  push();
  scale(1.1);
  translate(120, 350);
  treeDark();
  pop();
  push();
  scale(1.1);
  translate(390, 335);
  treeDark();
  pop();
  push();
  translate(80, 430);
  treeLight();
  pop();
  push();
  scale(1.3);
  translate(380, 300);
  treeLight();
  pop();
}

function character(x, y) {
  push(); //style changes only affect the character
  scale(0.5);
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
  pop(); //revert to original design
}

function draw() {
  mainMenu();
  //draw game elements
  // gameBackground();
  character(200, characterY);
}
