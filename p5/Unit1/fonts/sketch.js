var f, f1;

function setup() {
  createCanvas(800, 800);

  f = loadFont("assets/b.otf");
  f1 = loadFont("assets/m.otf");

  textAlign(CENTER);
}

function draw() {
  background(100);

  textFont(f);
  textSize(60);

  text("Feed the", width / 2, height / 2, 600, 100);

  textFont(f1);
  textSize(80);
  text("Monkeys", width / 2, height / 2 + 80);

}
