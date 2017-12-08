//Create two variables that will store the new objects from the class Circle
let circleArray = [];
let arraySize = 100;
var rSlider, gSlider, bSlider;


function setup() {
  createCanvas(450, 450);
  rSlider = createSlider(0, 255, 255);
  rSlider.position(200, 100);
  gSlider = createSlider(0, 255, 255);
  gSlider.position(200, 130);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(200  , 160);
  for (let i=0; i<arraySize; i++){
    circleArray[i] = new Circle;
  }
}


function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  text("red", rSlider.x * 2 + rSlider.width, 35);
  text("green", gSlider.x * 2 + gSlider.width, 65);
  text("blue", bSlider.x * 2 + bSlider.width, 95);
  background(r,g,b);
  for (let i=0; i<circleArray.length; i++){
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();

    if (mouseIsPressed) {
    for (let i=0; i<arraySize; i++){
      circleArray[i] = new Circle(mouseX, mouseY, random(-1, 1), random(-1, 1), random(1, 25));
    }
  }
}
}

//Definition of the class Circle
class Circle{

  constructor(x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;

    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = 100;
  }

  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }

  //Class function that displays the ellipse
  displayCircle(){
    noStroke();
    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    fill(this.fillcol);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
