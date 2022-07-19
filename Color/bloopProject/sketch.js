let circleX = 0;
let circleY = 0;
let diam = 20;
let transparency = 0;
let r = 0;
let g = 0;
let b = 0;
let qnt;
let x = 0;
let sort;

function setup() {
  pixelDensity(10);
  canvas = createCanvas(1200, 600);
  background(255);
  qnt = random(300, 900);
  sort = Math.floor(Math.random() * 9);
  console.log(sort);
}

function draw() {
  if (sort == 1) {
    while (x <= qnt) {
      createBubblesBW();
  }
} else {
    while (x <= qnt) {
      createBubblesColor();
}
}

}
// function mousePressed() {
//   saveCanvas("Bloop", "png");
// }

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