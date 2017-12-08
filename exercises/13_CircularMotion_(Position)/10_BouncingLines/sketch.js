//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//07_Bouncing Ball Exercise (Solved)
//For this exercise make sure that the ellipse does not
//appear from the other side, but rather bounds back from the edges
//When it bounces back, it also changes a random color

//Setup of variables
let x = 200; //using lines, we need a starting position
let y = 200;
let px = 200; //and an end position
let py = 200;

let speedX;
let speedY;
let col;

function setup() {
  createCanvas(400, 400);
  noStroke();
  //Create a new variable to store a color object
  col = color (255, 255, 255)
  speedX = random(-5., 5.);
  speedY = random(-5., 5.);
  background(160);
  strokeWeight(4);
}

function draw() {
  //background(160);
  //Adjust the position based on a speedX and speedY
  x = x + speedX;
  y = y + speedY;

  //Check the boundaries. If we hit the boundaries on the X axis, reverse,
  //and for every collision change the color
  if ((x > width) || (x < 0)) {
    speedX = (speedX * -1);
    col = color (random(255), random(255), random(255));
    px = x; //store a new position for the end of the line on each collision
    py = y;
  }

  //Check the boundaries. If we hit the boundaries on the Y axis, reverse,
  //and for every collision change the color
  if ((y > height) || (y < 0)) {
    speedY = speedY * -1;
    col = color (random(255), random(255), random(255));
    px = x; //store a new position for the end of the line on each collision
    py = y;
  }
  stroke(col);
  line(x, y, px, py);
}
