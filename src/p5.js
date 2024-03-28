/// <reference path="../node_modules/@types/p5/global.d.ts" />

function setup() {
  createCanvas(800, 800)
  noStroke()

  colorMode(HSB, 360, width, height)
  background(360, 0, height)
}

const radius = 300 // Must smaller than 800 to make it a cirle
const segmentCounts = 360

function draw() {
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
    fill(angle, mouseX, mouseY);
  }
  endShape()
}