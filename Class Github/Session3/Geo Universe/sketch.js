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
background (255,255,0)


  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 15; y++) {
      let size = random(10, 50);
      noLoop();
      stroke(255);
      strokeWeight(3);

      fill(random(255),random(255),random(255))
      ellipse(random (windowWidth), random (windowHeight), size, size)

      }
    }
  }
