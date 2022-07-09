function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(204)
  rectMode(CORNERS);
  rect(100, 100, 50, 50);
  rectMode(CENTER);
  rect(299, 299, 30, 30)
}