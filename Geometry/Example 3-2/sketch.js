function setup() {
  createCanvas(600, 600);
}

function draw() {
background(204);
point(299, 299);
point(599, 0);
point(0, 599);
point(0, 0);
point(599, 599);
for(i = 0; i<100; i++){
  point(100+i, 299);
}
}