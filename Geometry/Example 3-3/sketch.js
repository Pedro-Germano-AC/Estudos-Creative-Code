function setup() {
  createCanvas(600, 600);
}

function draw() {
background(204);
line(0, 319, 599, 319);
triangle(0, 299, 599, 299, 299, 0);
line(299, 0, 299, 599);
rect(299, 319, 299, 279 );
arc(299, 319, 299, 279, HALF_PI, PI);
arc(299, 299, 299, 279, PI, HALF_PI);
}