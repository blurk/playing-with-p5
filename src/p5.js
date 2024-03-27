/// <reference path="../node_modules/@types/p5/global.d.ts" />

function setup() {
  createCanvas(720, 720);
  background(200)
  noFill();
}

function draw() {
  ellipse(mouseX, mouseY, 40, 40);
}
