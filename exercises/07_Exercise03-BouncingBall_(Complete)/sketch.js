let y;
let speedX;
let speedY;
let r;
let g;
let b;

function setup(){
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  speedX = random(-5., 1);
  speedY = random(-5., 1);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw(){
  background(100);


  x += speedX;
  y += speedY;


  if (x>375) {
    speedX = -speedX;
    r = random(255);
    g = random(255);
    b = random(255);
  }


  if (x<25) {
    speedX = -speedX;
    r = random(255);
    g = random(255);
    b = random(255);
  }


  if (y>375) {
  speedY = -speedY;
  r = random(255);
  g = random(255);
  b = random(255);
  }

  if (y<25) {
  speedY = -speedY;
  r = random(255);
  g = random(255);
  b = random(255);
  }

  fill(r,g,b);
  ellipse(x, y, 50, 50);
}
