let tileCountX = 50;
let tileCountY = 30;

let hueValues = [];
let saturationValues = [];
let brightnessValues = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	noStroke();
	for (let i = 0; i < tileCountX; i++) {
		hueValues[i] = random(360);
		saturationValues[i] = random(100);
		brightnessValues[i] = random(100);
	}
}

function draw() {
	background('white');

	// limit mouse coordinates to canvas
	let mX = constrain(mouseX, 0, width);
	let mY = constrain(mouseY, 0, height);

	let counter = 0

	// map mouse to grid resolution
	let currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
	let currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
	let tileWidth = width / currentTileCountX;
	let tileHeight = height / currentTileCountY;

	for (let gridY = 0; gridY < tileCountY; gridY++) {
		for (let gridX = 0; gridX < tileCountX; gridX++) {
			let posX = tileWidth * gridX;
			let posY = tileHeight * gridY;
			/* When the grid is drawn, the colors are
			selected from the arrays, one by one.
			The continually incrementing variable
			counter starts to cycle through
			the same values because of the
			modulo operator, %. When
			currentTileCountX is 3, e.g.,
			index will consecutively hold the
			values 0, 1, 2, 0, 1, 2....This means
			only the first colors in the arrays are
			used in the grid. */
			let index = counter % currentTileCountX;

			// get component color values
			fill(hueValues[index], saturationValues[index], brightnessValues[index]);
			rect(posX, posY, tileWidth, tileHeight);
			counter++;
		}
	}
}

function keyPressed() {
	switch (key) {
		case '1': {
			for (let i = 0; i < tileCountX; i++) {
				hueValues[i] = random(360);
				saturationValues[i] = random(100);
				brightnessValues[i] = random(100);
			}
		}

		case '2': {
			for (let i = 0; i < tileCountX; i++) {
				hueValues[i] = random(360);
				saturationValues[i] = random(100);
				brightnessValues[i] = 100;
			}
		}

		case '3': {
			for (let i = 0; i < tileCountX; i++) {
				hueValues[i] = random(360);
				saturationValues[i] = 100;
				brightnessValues[i] = random(100);
			}
		}

		case '4': {
			for (let i = 0; i < tileCountX; i++) {
				hueValues[i] = 0;
				saturationValues[i] = 0;
				brightnessValues[i] = random(100);
			}
		}

		case '5': {
			for (let i = 0; i < tileCountX; i++) {
				hueValues[i] = 195;
				saturationValues[i] = 100;
				brightnessValues[i] = random(100);
			}
		}

		case '6': {
			for (let i = 0; i < tileCountX; i++) {
				hueValues[i] = 195;
				saturationValues[i] = random(100);
				brightnessValues[i] = 100;
			}
		}

		case '7': {
			for (let i = 0; i < tileCountX; i++) {
				hueValues[i] = random(180);
				saturationValues[i] = random(80, 100);
				brightnessValues[i] = random(50, 90);
			}
		}

		case '8': {
			for (let i = 0; i < tileCountX; i++) {
				hueValues[i] = random(180, 360);
				saturationValues[i] = random(80, 100);
				brightnessValues[i] = random(50, 90);
			}
		}

		case '9': {
			for (let i = 0; i < tileCountX; i++) {
				if (i % 2 == 0) {
					hueValues[i] = random(360);
					saturationValues[i] = 100;
					brightnessValues[i] = random(100);
				} else {
					hueValues[i] = 195;
					saturationValues[i] = random(100);
					brightnessValues[i] = 100;
				}
			}
		}

		case '0': {
			for (let i = 0; i < tileCountX; i++) {
				if (i % 2 == 0) {
					hueValues[i] = 140;
					saturationValues[i] = random(30, 100);
					brightnessValues[i] = random(40, 100);
				} else {
					hueValues[i] = 210;
					saturationValues[i] = random(40, 100);
					brightnessValues[i] = random(50, 100);
				}
			}
		}
	}
}