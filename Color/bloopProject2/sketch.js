var circleX = 0;
var circleY = 0;
var diam = 20;
var transparency = 0;
var r = 0;
var g = 0;
var b = 0;
var qnt;
var x = 0;
var aleat;

function setup() {

  // pixelDensity(15);
  canvas = createCanvas(800, 800);
  background(255);
  qnt = random(300, 600);
  aleat = Math.floor(Math.random() * 9);
  console.log(aleat);
  
}

function draw() {

  if (aleat == 1) {
    while (x <= qnt) {
      createBubblesBW();
  }
} 
  if (aleat == 2) {
    while (x <= qnt) {
      createBubblesRed();
  }
}
  if (aleat == 3) {
    while (x <= qnt) {
      createBubblesGreen();
  }
}
  if (aleat == 4) {
    while (x <= qnt) {
      createBubblesBlue();
  }
}
//   if (aleat == 5) {
//     while (x <= qnt) {
//       createBubblesOrange();
//   }
// }  
  else {
    while (x <= qnt) {
      createBubblesColor();
  }
}
}

function createBubblesColor() {

  noStroke();
  fill(r, g, b, transparency);
  smooth();
  circle(circleX, circleY, diam);
  circleX = random(0, width);
  circleY = random(0, height);
  diam = random(0, 100);
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  transparency = random(0, 255);
  x++;

}

function createBubblesBW() {

  noStroke();
  fill(r, transparency);
  smooth();
  circle(circleX, circleY, diam);
  circleX = random(0, width);
  circleY = random(0, height);
  diam = random(0, 100);
  r = random(0, 255);
  transparency = random(0, 255);
  x++;

}

function createBubblesRed() {

  noStroke();
  fill(r, 0, 0, transparency);
  smooth();
  circle(circleX, circleY, diam);
  circleX = random(0, width);
  circleY = random(0, height);
  diam = random(0, 100);
  r = random(0, 255);
  transparency = random(0, 255);
  x++;

}

function createBubblesGreen() {

  noStroke();
  fill(0, g, 0, transparency);
  smooth();
  circle(circleX, circleY, diam);
  circleX = random(0, width);
  circleY = random(0, height);
  diam = random(0, 100);
  g = random(0, 255);
  transparency = random(0, 255);
  x++;

}

function createBubblesBlue() {

  noStroke();
  fill(0, 0, b, transparency);
  smooth();
  circle(circleX, circleY, diam);
  circleX = random(0, width);
  circleY = random(0, height);
  diam = random(0, 100);
  b = random(0, 255);
  transparency = random(0, 255);
  x++;
  
}

// function createBubblesOrange() {
//   noStroke();
//   fill(255, 165, 0, transparency);
//   smooth();
//   circle(circleX, circleY, diam);
//   circleX = random(0, width);
//   circleY = random(0, height);
//   diam = random(0, 100);
//   // b = random(0, 255);
//   transparency = random(0, 255);
//   x++;
// }

function mousePressed() {

  saveCanvas("Bloop", "png");
  
}