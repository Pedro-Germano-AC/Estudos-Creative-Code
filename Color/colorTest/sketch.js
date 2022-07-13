var x = 1920;
var y = 1920;
let qnt = 20
let colors = ["#eff5cf", "#69cdb4", "#acfde2", "#6a6b70", "#6d11a8", "#a55994"]
function setup() {
  // pixelDensity(300);
  createCanvas(x, y);
  noLoop();
  colorMode(HSL);
}

function draw() {
  background(random(colors));
  // var qnt = random(20);
  // let qnt = 5

  while (qnt--){
    strokeCap(SQUARE);
    strokeWeight(random(80));
    stroke(random(0, 50), random(0, 100), random(0, 100));
    line(random(0, x), random(0, y), random(0, x), random(0, y));
  }

}

function mousePressed() {
  saveCanvas("teste", "png");
}