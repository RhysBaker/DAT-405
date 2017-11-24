//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//Homework task week 1 Rhys Baker

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(400, 400);

  //Size of stroke
  strokeWeight(7);

  //No stroke for shapes
  noStroke();
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to white
  background (100);

  //black outline
  fill(0, 0, 0);
  rect(190, 350, 30, 30);
  rect(160, 320, 30, 30);
  rect(130, 290, 30, 30);
  rect(100, 290, 30, -90);
  rect(130, 170, 60, 30);
  rect(190, 200, 30, 30);
  rect(220, 170, 60, 30);
  rect(280, 200, 30, 90);
  rect(220, 320, 30, 30);
  rect(250, 290, 30, 30);

//red fill
  fill (255, 0, 0);
  rect(190, 320, 30, 30);
  rect(160, 290, 90, 30);
  rect(130, 260, 150, 30);
  rect(130, 230, 150, 30);
  rect(130, 200, 60, 30);
  rect(220, 200, 60, 30);




}
