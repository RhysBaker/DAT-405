// Where is the circle
var x;
var y;

let r = 100;
let g = 100;
let b = 100;


let size = 50;

function setup() {
  createCanvas (500, 500);
  // Starts in the middle
  x = 0;
  y = 0;
  frameRate(60);
}

function draw() {
  background(200);

  // Draw a circle
  stroke(50);
  fill(r,g,b);

  ellipse(x, y, size, size);

  x += 15;
  y += 15;

  // Reset to the bottom
  if (x > width && y > height) {
    x = random(300,-300);
    y = 0;
    r = random(255);
    g = random(255);
    b = random(255);

  }
}
