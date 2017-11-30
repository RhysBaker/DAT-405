// Where is the circle
var x;
var y;

let r = 100;
let g = 100;
let b = 100;


let size = 50;

function setup() {
  var canvas = createCanvas (400, 400);
  canvas.parent("canvasContainer");
  canvas.stroke(150);
  // Starts in the middle
  x = 0;
  y = 0;
  frameRate(60);
}

function draw() {
  background(255);

  // Draw a circle
  stroke(50);
  fill(r,g,b);

  ellipse(x, y, size, size);

  x += 15;
  y += 15;

  // Reset to the bottom
  if (x > width && y > height) {
    x = random(250,-250);
    y = 0;
    r = random(255);
    g = random(255);
    b = random(255);

  }
}
