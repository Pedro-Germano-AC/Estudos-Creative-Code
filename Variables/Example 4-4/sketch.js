function setup() {
  createCanvas(480, 120);
  strokeWeight(2);
 }
 
 function draw() {
  background(204);
  for (var i = 0; i < 480; i += 8) {
    line(0, 0, i+i*0.5, 80);
    line(i+i*0.5, 80, (i+i*0.5)/2, 120);
    // line(-(i+i*0.5), 80,0, 0);
    // line(i+i*0.5, 80, i, 120);
  }
 }