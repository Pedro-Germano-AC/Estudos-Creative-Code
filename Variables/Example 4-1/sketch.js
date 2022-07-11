function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  line(0, 0, width, height); //linha de (0, 0) para (480, 120)
  line(width, 0, 0, height); //linha de (480, 0) para (0, 120)
  ellipse(width/2, height/2, 60, 60);
}