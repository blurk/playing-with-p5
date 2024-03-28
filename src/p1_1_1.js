function setup() {
	createCanvas(800, 400)
	colorMode(HSB, width, height, 100);
	noStroke()
}

function draw() {
	stepX = mouseX + 2;
	stepY = mouseY + 2

	for (let y = 0; y < height; y += stepY) {
		for (let x = 0; x < width; x += stepX) {
			fill(x, height - y, 100)
			rect(x, y, stepX, stepY)
		}
	}
}