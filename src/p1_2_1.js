var tileCountX = 2;
var tileCountY = 10;

let colorsLeft = [];
let colorsRight = [];

var interpolateShortest = true;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();
}

function draw() {
  tileCountX = int(map(mouseX, 0, width, 2, 100));
  tileCountY = int(map(mouseY, 0, height, 2, 10));
  let tileWidth = width / tileCountX;
  let tileHeight = height / tileCountY;
  let interCol;

  for (let gridY = 0; gridY < tileCountY; gridY++) {
    let col1 = colorsLeft[gridY];
    let col2 = colorsRight[gridY];

    for (let gridX = 0; gridX < tileCountX; gridX++) {
      let amount = map(gridX, 0, tileCountX - 1, 0, 1);

      if (interpolateShortest) {
        // switch to rgb
        colorMode(RGB);
        interCol = lerpColor(col1, col2, amount);
        // switch back
        colorMode(HSB);
      } else {
        interCol = lerpColor(col1, col2, amount);
      }

      fill(interCol);

      let posX = tileWidth * gridX;
      let posY = tileHeight * gridY;
      rect(posX, posY, tileWidth, tileHeight);
    }
  }
}

function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}

function mouseReleased() {
  shakeColors();
}

function keyPressed() {
  if (key == '1') interpolateShortest = true;
  if (key == '2') interpolateShortest = false;
}