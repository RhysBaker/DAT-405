//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_For-Loop

//Define the variable for the size
let size = 50;
let size2 = 30;

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  fill(215, 200, 170);
  //For-loop that will create 10 shapes on the window
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      for (let z = 0; z < 10; z++) {

        rect(size * z, height / 2 + 50, size, size);
        rect(size * y, height / 2 - 50, size, size);
        rect(size * x, height / 2, size, size);
      }
    }
  }
}
