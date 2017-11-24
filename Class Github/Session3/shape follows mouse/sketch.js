//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_For-Loop

//Define the variable for the size


let size;
var r, g, b;

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(240);

}

function draw() {
  r = random(255)
  g = random(255)
  b = random(255)
  fill(r, g, b);
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 25, 25)
  }
}
