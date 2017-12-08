//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//13_CircularMotion_(Position)

//Setup of variables
let angle = 0;
let speedX;
let x;
let col;


function setup(){
  createCanvas(400, 400);
  let sinValueX = sin(angle);
}

function draw(){
  background(160);

    angle += 0.5;

  let sinValueX = sin(angle);

  let y = map(sinValueX, -1, 1, height/2-150, height/2+150);
  x = x + speedX;

  if (x > width) {
    speedX = -5;
  }
  if (x > 0) {
    speedX = 5;
  }

  fill(255);
  ellipse(25+x, 25+x, 50, 50);
}
