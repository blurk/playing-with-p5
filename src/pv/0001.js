/// <reference types="../../node_modules/@types/p5/global.d.ts" />

let position;
let velocity;

function setup() {
  createCanvas(400, 400);

  position = createVector(width * 0.5, height * 0.5);
  velocity = createVector(1, 1);
}

function draw() {
  background("#EEEAEE");
  ellipse(position.x, position.y, 10, 10);
  position.add(velocity);
}
