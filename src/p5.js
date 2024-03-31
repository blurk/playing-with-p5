/// <reference path="../node_modules/@types/p5/global.d.ts" />

const radius = 300 // Must smaller than 800 to make it a cirle

function setup() {

  createCanvas(800, 800)
  noStroke()



  input = createInput(3, 'number');
  input.position(0, 800);

}

function draw() {
  colorMode(HSB, 360, width, height)
  background(360, 0, height)

  let segmentCounts = parseInt(input.value())
  let angleStep = 360 / segmentCounts

  const halfWidth = width / 2
  const halfHeight = height / 2

  beginShape(TRIANGLE_FAN)

  vertex(halfWidth, halfHeight)
  for (let angle = 0; angle <= 360; angle += angleStep) {
    // Using square triangle
    // radius is hypotenuse
    let vx = halfWidth + cos(radians(angle)) * radius;
    let vy = halfHeight + sin(radians(angle)) * radius;

    vertex(vx, vy);
    // fill(angle, mouseX, mouseY);
    fill(angle, width, height);
  }
  endShape()
}