//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_For-Loop

//Define the variable for the size


  let size;
  var r,g,b;

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(240);

  }

function draw() {
  size = random (1,25)
  r = random(255)
  g = random(255)
  b = random(255)
  fill (r,g,b);
  //For-loop that will create 10 shapes on the window
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {

      rect(random(displayWidth), random(displayHeight), size, size);
      ellipse(random(displayWidth), random(displayHeight), size, size);
      }
    }
  }
