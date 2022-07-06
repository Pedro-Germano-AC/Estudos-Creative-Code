function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(204);
  ellipse(99, 150, 100, 100);
  ellipse(500, 150, 100, 100);
  ellipse(299, 299, 500, 500);
  ellipse(150, 200, 80, 80);
  ellipse(449, 200, 80, 80);
  line(300, 300, 300, 400);
  arc(225, 400, 150, 150, TWO_PI, PI);
  arc(375, 400, 150, 150, TWO_PI, PI);
}