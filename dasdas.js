var circleX = 0;
var circleY = 0;
var diam = 20;
var transparency = 0;
var r = 0;
var g = 0;
var b = 0;
var qnt;
function setup() {
  // pixelDensity(300);
  createCanvas(640, 360);
  background(255);
  qnt = random(50, 250);
}

function draw() {
   while (qnt--){
    noStroke();
    fill(r, g, b, transparency);
    smooth();
    circle(circleX, circleY, diam);
    circleX = random(0, 640);
    circleY = random(0, 360);
    diam = random(0, 40);
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    transparency = random(0, 255);
  }
}

function mousePressed() {
  saveCanvas("Bloop", "png");
}