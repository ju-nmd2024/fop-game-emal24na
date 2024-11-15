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

let characterX = 600;
let characterY = -150;
let characterBrokenX = 600;
let characterBrokenY = 600;
let velocityY = 2;
let acceleration = 0.5;
let cloudX = 0;
let cloudY = 0;
let cloudSpeed = 0.5;
let characterHomeX = 600;
let characterHomeY = 1000;
let characterHomeSpeed = 2;
let gameState = "mainMenu";

function setup() {
  createCanvas(600, 600);
}

function treeDark(x, y) {
  fill(66, 53, 41);
  stroke(38, 32, 26);
  rect(-5, 100, 20, 40);
  fill(37, 61, 35);
  stroke(23, 36, 21);
  ellipse(0, 65, 70, 100);
  ellipse(0, 20, 70);
  ellipse(20, 65, 70);
  ellipse(-20, 50, 50);
  ellipse(-20, 80, 50);
  ellipse(30, 30, 50);
  noStroke();
  fill(37, 61, 35);
  ellipse(0, 65, 70, 97);
  ellipse(0, 20, 66);
  ellipse(20, 65, 66);
  ellipse(-20, 50, 47);
  ellipse(-20, 80, 47);
  ellipse(30, 30, 47);
}

function treeLight(x, y) {
  fill(66, 53, 41);
  stroke(38, 32, 26);
  rect(-5, 100, 20, 40);
  fill(71, 110, 68);
  stroke(45, 66, 43);
  ellipse(0, 65, 70, 100);
  ellipse(0, 20, 70);
  ellipse(20, 65, 70);
  ellipse(-20, 50, 50);
  ellipse(-20, 80, 50);
  ellipse(30, 30, 50);
  noStroke();
  fill(71, 110, 68);
  ellipse(0, 65, 70, 98);
  ellipse(0, 20, 67);
  ellipse(20, 65, 67);
  ellipse(-20, 50, 48);
  ellipse(-20, 80, 48);
  ellipse(30, 30, 48);
}

function clouds() {
  fill(255);
  ellipse(cloudX + 100, cloudY + 100, 150, 60);
  ellipse(cloudX + 130, cloudY + 60, 130, 60);
  ellipse(cloudX + 200, cloudY + 90, 80, 60);
  ellipse(cloudX + 500, cloudY + 120, 150, 60);
  ellipse(cloudX + 450, cloudY + 100, 130, 60);
  ellipse(cloudX + 400, cloudY + 110, 100, 60);
  ellipse(cloudX + 540, cloudY + 90, 100, 60);

  cloudX = cloudX + cloudSpeed;
  if (cloudX > 0) {
    cloudSpeed = cloudSpeed * -1;
  } else if (cloudX < -100) {
    cloudSpeed = cloudSpeed * -1;
  }
}

function drawCommonBackground() {
  background(192, 221, 235);
  //ground
  strokeWeight(2);
  stroke(71, 110, 68);
  fill(103, 163, 103);
  rect(0, 500, 600, 100);
  //path
  stroke(60);
  fill(100);
  quad(350, 500, 250, 500, 200, 600, 400, 600);
  //clouds
  fill(255);
  noStroke();
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
  translate(125, 350);
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

  //moving clouds
  clouds();
}

function character(x, y) {
  push(); //style changes only affect the character
  scale(0.5);
  strokeWeight(3);

  //rope
  stroke(69, 54, 39);
  line(characterX - 25, characterY + 25, characterX - 25, characterY + 70);
  line(characterX, characterY + 25, characterX, characterY + 70);
  line(characterX + 25, characterY + 25, characterX + 25, characterY + 70);

  //basket
  fill(196, 164, 112);
  stroke(69, 54, 39);
  rect(characterX - 25, characterY + 70, 50);
  //basket ends
  fill(163, 127, 93);
  rect(characterX - 30, characterY + 70, 60, 10, 20);
  rect(characterX - 30, characterY + 120, 60, 10, 20);

  //balloon
  fill(114, 88, 163);
  stroke(59, 44, 87);
  ellipse(characterX, characterY - 80, 150);
  quad(
    characterX - 69,
    characterY - 50,
    characterX + 69,
    characterY - 50,
    characterX + 25,
    characterY + 25,
    characterX - 25,
    characterY + 25
  );

  //balloon_decor
  noStroke();
  fill(114, 88, 163);
  quad(
    characterX - 68,
    characterY - 52,
    characterX + 68,
    characterY - 52,
    characterX + 23,
    characterY + 23,
    characterX - 23,
    characterY + 23
  );
  fill(250, 241, 222);
  quad(
    characterX,
    characterY - 52,
    characterX + 68,
    characterY - 52,
    characterX,
    characterY + 23,
    characterX + 23,
    characterY + 23
  );
  quad(
    characterX - 68,
    characterY - 52,
    characterX,
    characterY - 52,
    characterX - 23,
    characterY + 23,
    characterX,
    characterY + 23
  );
  quad(
    characterX,
    characterY - 52,
    characterX + 56,
    characterY - 128,
    characterX,
    characterY - 153,
    characterX + 68,
    characterY - 52
  );
  quad(
    characterX - 68,
    characterY - 52,
    characterX,
    characterY - 153,
    characterX - 55,
    characterY - 128,
    characterX,
    characterY - 52
  );

  //bags
  fill(242, 174, 56);
  stroke(163, 105, 42);
  strokeWeight(3);
  ellipse(characterX, characterY + 90, 10, 15);
  ellipse(characterX - 25, characterY + 90, 10, 15);
  ellipse(characterX + 25, characterY + 90, 10, 15);
  pop(); //revert to original design
}

function characterBroken(characterBrokenX, characterBrokenY) {
  push(); //style changes only affect the character

  scale(0.5);
  strokeWeight(3);

  //rope
  stroke(69, 54, 39);

  line(
    characterBrokenX - 25,
    characterBrokenY + 25,
    characterBrokenX - 25,
    characterBrokenY + 70
  );

  line(
    characterBrokenX,
    characterBrokenY + 25,
    characterBrokenX,
    characterBrokenY + 70
  );

  line(
    characterBrokenX + 25,
    characterBrokenY + 25,
    characterBrokenX + 25,
    characterBrokenY + 70
  );

  //basket
  fill(196, 164, 112);
  stroke(69, 54, 39);
  rect(characterBrokenX - 25, characterBrokenY + 70, 50);
  //basket ends
  fill(163, 127, 93);
  rect(characterBrokenX - 30, characterBrokenY + 70, 60, 10, 20);
  rect(characterBrokenX - 30, characterBrokenY + 120, 60, 10, 20);

  //balloon
  fill(114, 88, 163);
  stroke(59, 44, 87);
  ellipse(characterBrokenX, characterBrokenY - 80, 150);

  quad(
    characterBrokenX - 69,
    characterBrokenY - 50,
    characterBrokenX + 69,
    characterBrokenY - 50,
    characterBrokenX + 25,
    characterBrokenY + 25,
    characterBrokenX - 25,
    characterBrokenY + 25
  );

  //balloon_decor
  noStroke();
  fill(114, 88, 163);

  quad(
    characterBrokenX - 68,
    characterBrokenY - 52,
    characterBrokenX + 68,
    characterBrokenY - 52,
    characterBrokenX + 23,
    characterBrokenY + 23,
    characterBrokenX - 23,
    characterBrokenY + 23
  );

  fill(250, 241, 222);

  quad(
    characterBrokenX,
    characterBrokenY - 52,
    characterBrokenX + 68,
    characterBrokenY - 52,
    characterBrokenX,
    characterBrokenY + 23,
    characterBrokenX + 23,
    characterBrokenY + 23
  );

  quad(
    characterBrokenX - 68,
    characterBrokenY - 52,
    characterBrokenX,
    characterBrokenY - 52,
    characterBrokenX - 23,
    characterBrokenY + 23,
    characterBrokenX,
    characterBrokenY + 23
  );

  quad(
    characterBrokenX,
    characterBrokenY - 52,
    characterBrokenX + 56,
    characterBrokenY - 128,
    characterBrokenX,
    characterBrokenY - 153,
    characterBrokenX + 68,
    characterBrokenY - 52
  );

  quad(
    characterBrokenX - 68,
    characterBrokenY - 52,
    characterBrokenX,
    characterBrokenY - 153,
    characterBrokenX - 55,
    characterBrokenY - 128,
    characterBrokenX,
    characterBrokenY - 52
  );

  fill(59, 44, 87);
  ellipse(characterBrokenX - 55, characterBrokenY - 100, 30, 40);
  ellipse(characterBrokenX - 40, characterBrokenY - 90, 40, 30);
  ellipse(characterBrokenX - 20, characterBrokenY - 100, 20, 30);
  ellipse(characterBrokenX - 40, characterBrokenY - 75, 20);
  ellipse(characterBrokenX - 65, characterBrokenY - 80, 20);

  //bags
  fill(242, 174, 56);
  stroke(163, 105, 42);
  strokeWeight(3);
  push();
  ellipse(characterBrokenX - 5, characterBrokenY + 80, 15, 10);
  ellipse(characterBrokenX + 20, characterBrokenY + 80, 15, 10);
  ellipse(characterBrokenX - 30, characterBrokenY + 80, 15, 10);
  pop();
  pop(); //revert to original design
}

function characterHome(x, y) {
  push(); //style changes only affect the character
  scale(0.5);
  strokeWeight(3);

  //rope
  stroke(69, 54, 39);
  line(
    characterHomeX - 25,
    characterHomeY + 25,
    characterHomeX - 25,
    characterHomeY + 70
  );
  line(
    characterHomeX,
    characterHomeY + 25,
    characterHomeX,
    characterHomeY + 70
  );
  line(
    characterHomeX + 25,
    characterHomeY + 25,
    characterHomeX + 25,
    characterHomeY + 70
  );

  //basket
  fill(196, 164, 112);
  stroke(69, 54, 39);
  rect(characterHomeX - 25, characterHomeY + 70, 50);
  //basket ends
  fill(163, 127, 93);
  rect(characterHomeX - 30, characterHomeY + 70, 60, 10, 20);
  rect(characterHomeX - 30, characterHomeY + 120, 60, 10, 20);

  //balloon
  fill(114, 88, 163);
  stroke(59, 44, 87);
  ellipse(characterHomeX, characterHomeY - 80, 150);
  quad(
    characterHomeX - 69,
    characterHomeY - 50,
    characterHomeX + 69,
    characterHomeY - 50,
    characterHomeX + 25,
    characterHomeY + 25,
    characterHomeX - 25,
    characterHomeY + 25
  );

  //balloon_decor
  noStroke();
  fill(114, 88, 163);
  quad(
    characterHomeX - 68,
    characterHomeY - 52,
    characterHomeX + 68,
    characterHomeY - 52,
    characterHomeX + 23,
    characterHomeY + 23,
    characterHomeX - 23,
    characterHomeY + 23
  );
  fill(250, 241, 222);
  quad(
    characterHomeX,
    characterHomeY - 52,
    characterHomeX + 68,
    characterHomeY - 52,
    characterHomeX,
    characterHomeY + 23,
    characterHomeX + 23,
    characterHomeY + 23
  );
  quad(
    characterHomeX - 68,
    characterHomeY - 52,
    characterHomeX,
    characterHomeY - 52,
    characterHomeX - 23,
    characterHomeY + 23,
    characterHomeX,
    characterHomeY + 23
  );
  quad(
    characterHomeX,
    characterHomeY - 52,
    characterHomeX + 56,
    characterHomeY - 128,
    characterHomeX,
    characterHomeY - 153,
    characterHomeX + 68,
    characterHomeY - 52
  );
  quad(
    characterHomeX - 68,
    characterHomeY - 52,
    characterHomeX,
    characterHomeY - 153,
    characterHomeX - 55,
    characterHomeY - 128,
    characterHomeX,
    characterHomeY - 52
  );

  //bags
  fill(242, 174, 56);
  stroke(163, 105, 42);
  strokeWeight(3);
  ellipse(characterHomeX, characterHomeY + 90, 10, 15);
  ellipse(characterHomeX - 25, characterHomeY + 90, 10, 15);
  ellipse(characterHomeX + 25, characterHomeY + 90, 10, 15);
  pop(); //revert to original design

  characterHomeY = characterHomeY + characterHomeSpeed;
  if (characterHomeY > 1000) {
    characterHomeSpeed = characterHomeSpeed * -1;
  } else if (characterHomeY < -150) {
    characterHomeSpeed = characterHomeSpeed * -1;
  }
}

function drawInstructions() {
  background(192, 221, 235); // Sky blue background
  strokeWeight(5);
  fill(255);
  stroke(100);
  textSize(48);
  text("INSTRUCTIONS", 120, 160);
  noStroke();
  fill(50);
  textSize(20);
  text("Press SPACE to add fuel", 180, 270);
  text("Stabilize the speed of the balloon", 140, 290);
  text("Avoid hitting the ground at high speed!", 120, 310);
  text("Click anywhere to go back to the menu.", 120, 550);
}

function drawMainMenu() {
  drawCommonBackground();

  //moving hot air balloon
  characterHome();

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

function drawLoseScreen() {
  drawCommonBackground();
  push();
  rotate(-0.8);
  characterBroken(-350, 1050);
  pop();
  background(0, 0, 255, 20);
  fill(50);
  textSize(20);
  text("YOU LOST", 180, 270);
  text("The passengers in the balloon died", 140, 290);
  text("Click anywhere to go back to the menu.", 120, 580);
}

function drawWinScreen() {
  gameState = "win";
  drawCommonBackground();
  noStroke();
  fill(50);
  textSize(20);
  text("YOU WON", 180, 270);
  text("The passengers in the balloon died", 140, 290);
  text("Click anywhere to go back to the menu.", 120, 580);
  character(600, 950);
}

//the following function was generated with ChatGPT with modifications
//https://chatgpt.com/share/6737bfb0-415c-800e-bc2c-b1d506131a29
function resetGame() {
  characterX = 600;
  characterY = -150;
  characterBrokenX = 600;
  characterBrokenY = 600;
  velocityY = 2;
  acceleration = 0.5;
}

function draw() {
  if (gameState === "mainMenu") {
    drawMainMenu();
  } else if (gameState === "instructions") {
    drawInstructions();
  } else if (gameState === "game") {
    drawCommonBackground();
    character(characterX, characterY);

    characterY = characterY + velocityY;
    velocityY = velocityY + acceleration;

    if (keyIsDown(32) === true) {
      acceleration = -1;
    } else {
      acceleration = 0.5;
    }

    if (velocityY > 4 && characterY > 950) {
      gameState = "lose";
    } else if (velocityY <= 4 && characterY > 950) {
      gameState = "win";
    }
  } else if (gameState === "win") {
    drawWinScreen();
  } else if (gameState === "lose") {
    drawLoseScreen();
  }
}

function mouseClicked() {
  if (gameState === "mainMenu") {
    if (mouseX > 200 && mouseX < 400 && mouseY > 300 && mouseY < 400) {
      gameState = "game";
    } else if (mouseX > 200 && mouseX < 400 && mouseY > 420 && mouseY < 520) {
      gameState = "instructions";
    }
  } else if (
    gameState === "instructions" ||
    gameState === "lose" ||
    gameState === "win"
  ) {
    resetGame(); //resets the game variables
    gameState = "mainMenu";
  }
}
