//this is all super messy. use bubbles in p5js drawings as model.

let crosses = [];

// let x, y;
// let rect1Height;
// let rectWidth;
// let y2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  rectWidth = random(20, 200);
  rect1Height = rectWidth * 2;

  x = random(width);
  y = random(height);

  y2 = y - (rect1Height / 2 - rect1Height / 3);

  noStroke();
  fill(255, 255, 255);
  rectMode(CENTER);
  rect(x, y, rectWidth * 0.1, rect1Height);
  rect(x, y2, rectWidth, rectWidth * 0.1);
}

// not sure about syntax
setInterval(draw, 1500);

class Cross {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  show() {
    stroke(255);
    strokeWeight(2);
    noFill();
    stroke(255);
    rect(this.x, this.y, this.width, this.height);
  }
}

// media de homicidios no Brasil: 130 / dia
// 5.41 / hora
// 0.09 / minuto
