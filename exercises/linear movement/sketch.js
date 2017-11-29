// Where is the circle
var x;
var y;

let size = 50;

function setup() {
  createCanvas (500, 500);
  // Starts in the middle
  x = 0;
  y = height / 2;
  frameRate(60);
}

function draw() {
  background(200);

  // Draw a circle
  stroke(50);
  fill(100);

  ellipse(x, y, size, size);

  x = x + 10;

  // Reset to the bottom
  if (x > width) {
    x = 0;
  }
}
