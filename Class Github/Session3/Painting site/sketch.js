//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_For-Loop

//Define the variable for the size


let size;
var r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

}

function draw() {
  noStroke()

  r = random(255)
  g = random(255)
  b = random(255)

  fill(r, g, b);
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 20, 20)
  }
}
