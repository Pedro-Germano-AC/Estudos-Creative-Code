const w = 600;
const m = w/14;
const h = m*20;
const r = 3.5*m;
function setup() {
  createCanvas(h, w);
  noStroke();
 }
 function draw() {
  background(0, 156, 59);
  fill(255,223,0);
  beginShape();
  vertex(1.7*(h/20), 7*(w/14));
  vertex(10*(h/20), 1.7*(w/14));
  vertex(h-(1.7*(h/20)), 7*(w/14));
  vertex(10*(h/20), w-(1.7*w/14));
  endShape();
  fill(0,39,118)
  ellipse(h/2, w/2, r, r);
 }