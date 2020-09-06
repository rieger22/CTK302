var f, f1;

function setup() {
  createCanvas(800, 800);

  f = loadFont("assets/c.ttf");
  f1 = loadFont("assets/m.otf");

  textAlign(CENTER);
}

function draw() {
  background(100);

  textFont(f);
  textSize(80);

  text("Feed the", width / 2, height / 2);

  textFont(f1);
  textSize(80);
  text("Monkeys", width / 2, height / 2+80);

}
