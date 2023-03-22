let spriteX, spriteY;
let cherryX, cherryY;
let notEaten;

function setup() {
  createCanvas(400, 400);
  //defining variable
  spriteX = 50;
  spriteY = 50;
  cherryX = random(width - 20);
  cherryY = random(height - 20);
  notEaten = true;
  pacSize = 50;
  numFoodEaten = 0;
}

function draw() {
  background(0);
  text(numFoodEaten, 20, 20);
  drawBro();
  addFood(cherryX, cherryY);
  //adding logic for eating the cherry
  let d = dist(spriteX, spriteY, cherryX, cherryY);
  if (d <= 40) {
    notEaten = false;
    cherryX = cherryX + 500;
    numFoodEaten = numFoodEaten + 1;
    pacSize = pacSize + 10;
  }
}

function drawBro(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  //making pac man
  fill("gold");
  ellipse(spriteX, spriteY, pacSize, pacSize);
  fill(0);
  beginShape();
  vertex(spriteX - 7, spriteY);
  vertex(spriteX + 30, spriteY + 10);
  vertex(spriteX + 30, spriteY - 10);
  endShape();
  pop();
}
//using keypressed to move pac man
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    spriteX = spriteX - 20;
  } else if (keyCode === RIGHT_ARROW) {
    spriteX = spriteX + 20;
  }

  if (keyCode === UP_ARROW) {
    spriteY = spriteY - 20;
  } else if (keyCode === DOWN_ARROW) {
    spriteY = spriteY + 20;
  }
}

function addFood(x, y) {
  //adding the cherry
  push();
  translate(x, y);
  strokeWeight(5);
  noFill();
  stroke("limegreen");
  beginShape();
  vertex(-10, -5);
  vertex(10, -50);
  vertex(10, 0);
  endShape();
  push();
  noStroke();
  fill("red");
  ellipse(-10, 0, 20, 20);
  ellipse(10, 0, 20, 20);
  pop();
  pop();
}
let spriteX, spriteY;
let cherryX, cherryY;
let notEaten;

function setup() {
  createCanvas(400, 400);
  //defining variable
  spriteX = 50;
  spriteY = 50;
  cherryX = random(width - 20);
  cherryY = random(height - 20);
  notEaten = true;
  pacSize = 50;
  numFoodEaten = 0;
}

function draw() {
  background(0);
  text(numFoodEaten, 20, 20);
  drawBro();
  addFood(cherryX, cherryY);
  //adding logic for eating the cherry
  let d = dist(spriteX, spriteY, cherryX, cherryY);
  if (d <= 40) {
    notEaten = false;
    cherryX = cherryX + 500;
    numFoodEaten = numFoodEaten + 1;
    pacSize = pacSize + 10;
  }
}

function drawBro(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  //making pac man
  fill("gold");
  ellipse(spriteX, spriteY, pacSize, pacSize);
  fill(0);
  beginShape();
  vertex(spriteX - 7, spriteY);
  vertex(spriteX + 30, spriteY + 10);
  vertex(spriteX + 30, spriteY - 10);
  endShape();
  pop();
}
//using keypressed to move pac man
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    spriteX = spriteX - 20;
  } else if (keyCode === RIGHT_ARROW) {
    spriteX = spriteX + 20;
  }

  if (keyCode === UP_ARROW) {
    spriteY = spriteY - 20;
  } else if (keyCode === DOWN_ARROW) {
    spriteY = spriteY + 20;
  }
}

function addFood(x, y) {
  //adding the cherry
  push();
  translate(x, y);
  strokeWeight(5);
  noFill();
  stroke("limegreen");
  beginShape();
  vertex(-10, -5);
  vertex(10, -50);
  vertex(10, 0);
  endShape();
  push();
  noStroke();
  fill("red");
  ellipse(-10, 0, 20, 20);
  ellipse(10, 0, 20, 20);
  pop();
  pop();
}
