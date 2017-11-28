var rectColour;
var rectColour2;
var rectColour3;
var rectColour4;
var overRect;
var overRect2;
var overRect3;
var overRect4;

function setup() {
  // set canvas size
  createCanvas(windowWidth, windowHeight);
  frameRate(15);

  // default background color
  backgroundColor = color(255, 255, 255);
}

function draw() {
  background(backgroundColor);


  // check if mouse is inside the rectangle
  // mouseX >= x && mouseX <= x+width && mouseY >= y && mouseY <= y+height
  if (mouseX >= 110 && mouseX <= 110+100 && mouseY >= 110 && mouseY <= 110+100) {
    overRect = true;
  }
    else {
    overRect = false;
  }

    if (mouseX >= 110 && mouseX <= 110+100 && mouseY >= 10 && mouseY <= 10+100) {
    overRect2 = true;
  }
    else {
    overRect2 = false;
  }

    if (mouseX >= 10 && mouseX <= 10+100 && mouseY >= 10 && mouseY <= 10+100) {
    overRect3 = true;
  }
    else {
    overRect3 = false;
  }

     if (mouseX >= 10 && mouseX <= 10+100 && mouseY >= 110 && mouseY <= 110+100) {
    overRect4 = true;
  }
    else {
    overRect4 = false;
  }

  // draw a rectangle

  rectMode(CORNER);
  stroke(0);
  strokeWeight(5);
  rect(10, 10, 100, 100);


    // draw a rectangle

  rectMode(CORNER);
  stroke(0);
  strokeWeight(5);
  rect(10, 110, 100, 100);


    // draw a rectangle

  rectMode(CORNER);
  stroke(0);
  strokeWeight(5);
  rect(110, 10, 100, 100);



    // draw a rectangle

  rectMode(CORNER);
  stroke(0);
  strokeWeight(5);
  rect(110, 110, 100, 100);


}

function mouseMoved()
{
  if(overRect == true)
  {
    rectColour = fill(random(255), random(255), random(255));
  }

    if(overRect2 == true)
  {
    rectColour2 = fill(random(255), random(255), random(255));
  }

    if(overRect3 == true)
  {
    rectColour3 = fill(random(255), random(255), random(255));
  }

    if(overRect4 == true)
  {
    rectColour4 = fill(random(255), random(255), random(255));
  }

}
