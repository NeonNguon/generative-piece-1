function setup() {
  createCanvas(500, 500);
  frameRate(1);
  noCursor();
  noStroke();
}

function draw() {
  background(random(255), random(255), random(255));
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), 150, 150);
}
