function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  for (var i = 20; i < 400; i+=4 ){
    line(i, 40, i+60, 80);
  }
}