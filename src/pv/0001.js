/// <reference types="../../node_modules/@types/p5/global.d.ts" />

// P5Capture.setDefaultOptions({
//   format: "mp4",
//   framerate: 60,
//   quality: 1,
//   width: 720,
// });

let particleSystems = [];

function setup() {
  createCanvas(720, 720);
}

function draw() {
  background("#000");
  colorMode(HSB, 255);

  // if (random() < 0.3) {
  //   particleSystems.push(new System({ x: width / 2, y: height / 2 }));
  // }

  if (mouseX !== pmouseX && mouseY !== pmouseY) {
    particleSystems.push(new System({ x: mouseX, y: mouseY }));
  }

  for (let i = particleSystems.length - 1; i > -1; i--) {
    particleSystems[i].update();
    particleSystems[i].display();

    if (particleSystems[i].done) {
      particleSystems.splice(i, 1);
    }
  }
}

function mouseClicked() {
  particleSystems.push(new System({ x: mouseX, y: mouseY }));
}

class Particle {
  constructor({ x, y }) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(random(0, 1 / 3));

    this.hue = random(0, 255);
    this.life = random(0, 255);
    this.done = false;
  }

  update() {
    this.finished();

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.life -= random(1, 3);
    this.hue += random(3, 7);

    if (this.hue > 255) {
      this.hue = 0;
    }
  }

  display() {
    noStroke();
    fill(this.hue, 255, this.life);
    ellipse(this.position.x, this.position.y, 4, 4);
  }

  finished() {
    if (this.life < 0) {
      this.done = true;
    } else {
      this.done = false;
    }
  }
}

class System {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;

    this.particles = [];
    this.num = 50;
    this.done = false;

    for (let i = 0; i < this.num; i++) {
      this.particles.push(new Particle({ x: this.x, y: this.y }));
    }
  }

  update() {
    this.finished();
    for (let i = this.particles.length - 1; i > -1; i--) {
      this.particles[i].update();
      this.particles[i].display();

      if (this.particles[i].done) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    this.particles.forEach((particle) => {
      particle.display();
    });
  }

  finished() {
    if (this.particles.length === 0) {
      this.done = true;
    } else {
      this.done = false;
    }
  }
}
