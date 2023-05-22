let x, y;
let rect1Height;
let rectWidth;
let y2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

setInterval(function draw() {
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
}, 1500);

// media de homicidios no Brasil: 130 / dia
// 5.41 / hora
// 0.09 / minuto
// 0.0015 / segundo
// a cada 11 minutos, há um homicídio no Brasil => 660.000 mS
