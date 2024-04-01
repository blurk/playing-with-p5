/// <reference path="../node_modules/@types/p5/global.d.ts" />

let img
let colors = []
let sortMode = null
let mySelect;

const IMG_URL = "https://images.unsplash.com/photo-1531083387481-546bfca89105?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

function preload() {
  loadImage(IMG_URL, (
    loadedImageFile
  ) => {
    img = loadedImageFile
  })
}

function setup() {
  createCanvas(800, 800);
  noCursor();
  noStroke();

  mySelect = createSelect();
  mySelect.position(0, 800);

  // Add color options.
  mySelect.option('NONE');
  mySelect.option('HUE');
  mySelect.option('SATURATION');
  mySelect.option('BRIGHTNESS');
  mySelect.option('GRAYSCALE');

  mySelect.selected('NONE');
}

function draw() {
  switch (mySelect.selected()) {
    case "HUE": sortMode = gd.HUE; break;
    case 'SATURATION': sortMode = gd.SATURATION; break;
    case 'BRIGHTNESS': sortMode = gd.BRIGHTNESS; break;
    case 'GRAYSCALE': sortMode = gd.GRAYSCALE; break;
    default: {
      sortMode = null
    }
  }


  let tileCount = floor(width / max(mouseX, 5));
  let rectSize = width / tileCount;

  img.loadPixels()
  colors = []

  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let px = int(gridX * rectSize);
      let py = int(gridY * rectSize);
      let i = (py * img.width + px) * 4;
      let c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }

  gd.sortColors(colors, sortMode);

  let i = 0;
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}
