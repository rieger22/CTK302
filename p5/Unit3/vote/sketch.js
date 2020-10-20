let cars = [];
let f1, f2, f3;
let bg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  f1 = loadFont("assets/KGChasingCars.ttf");
  f2 = loadFont("assets/rock.ttf");
  f3 = loadFont("assets/spaceage.ttf");
  bg = loadImage("assets/fallPic.jpg");

  // Spawn 20 objects
  for (let i = 0; i < 20; i++) {
    cars.push(new Car());
  }
}

function draw() {
  //background(100);
  image(bg, 0, 0, width, height);

  // display and move 20 objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
  }
}

// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.size = random(60, 180);
    this.c = color(random(255), random(255), random(255));
    this.font = f1;
  }

  // methods
  display() {
    //rect(this.pos.x, this.pos.y, 50, 25);
    fill(this.c);
    textFont(this.font);
    textSize(this.size);
    text("vote", this.pos.x, this.pos.y);
  }


  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
