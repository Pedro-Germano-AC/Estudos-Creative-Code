function setup() {
  createCanvas(480, 120);
  strokeWeight(2);
 }
 
 function draw() {
  background(204);
  for (var i = 0; i < 480; i += 2.97) {
  line(i, 0, i + i/2*i*0.2, 120);
  }
 }