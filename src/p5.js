/// <reference path="../node_modules/@types/p5/global.d.ts" />

let colorCount = 20;
let hueValues = [];
let saturationValues = [];
let brightnessValues = [];
let actRandomSeed = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	noStroke();
}

function draw() {
	noLoop();
	randomSeed(actRandomSeed);

	// create palette
	for (let i = 0; i < colorCount; i++) {
		if (i % 2 == 0) {
			hueValues[i] = random(0, 180);
			saturationValues[i] = 100;
			brightnessValues[i] = random(20, 80);
		} else {
			hueValues[i] = 195;
			saturationValues[i] = random(0, 100);
			brightnessValues[i] = 100;
		}
	}

	// for (let i = 0; i < colorCount; i++) {
	// 	if (i < colorCount * 0.2) {
	// 		hueValues[i] = 339;
	// 		saturationValues[i] = 63;
	// 		brightnessValues[i] = 6
	// 	} else if (i < colorCount * 0.4) {
	// 		hueValues[i] = 248;
	// 		saturationValues[i] = 33
	// 		brightnessValues[i] = 9
	// 	} else if (i < colorCount * 0.6) {
	// 		hueValues[i] = 227;
	// 		saturationValues[i] = 49;
	// 		brightnessValues[i] = 15
	// 	}
	// 	else if (i < colorCount * 0.8) {
	// 		hueValues[i] = 203;
	// 		saturationValues[i] = 30;
	// 		brightnessValues[i] = 28
	// 	}
	// 	else {
	// 		hueValues[i] = 55;
	// 		saturationValues[i] = 33
	// 		brightnessValues[i] = 55
	// 	}
	// }

	// ------ area tiling ------
	// count tiles
	let counter = 0;
	// row count and row height
	let rowCount = int(random(5, 30));
	let rowHeight = height / rowCount;

	// seperate each line in parts
	for (let i = rowCount; i >= 0; i--) {
		// how many fragments
		let partCount = i + 1;
		let parts = [];

		for (let ii = 0; ii < partCount; ii++) {
			// sub fragments or not?
			if (random() < 0.075) {
				// take care of big values
				let fragments = int(random(2, 20));
				partCount = partCount + fragments;
				for (let iii = 0; iii < fragments; iii++) {
					parts.push(random(2));
				}
			} else {
				parts.push(random(2, 20));
			}
		}

		// add all subparts
		let sumPartsTotal = 0;
		for (let ii = 0; ii < partCount; ii++) {
			sumPartsTotal += parts[ii];
		}

		// draw rects
		let sumPartsNow = 0;
		for (let ii = 0; ii < parts.length; ii++) {
			sumPartsNow += parts[ii];

			let x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
			let y = rowHeight * i;
			let w = -map(parts[ii], 0, sumPartsTotal, 0, width);
			let h = rowHeight;

			let index = counter % colorCount;
			let _color = color(hueValues[index], saturationValues[index], brightnessValues[index]);
			fill(_color);
			rect(x, y, w, h);

			counter++;
		}
	}
}

function mouseReleased() {
	actRandomSeed = random(100000);
	loop();
}