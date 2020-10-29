let cars = [];
let f1, f2, f3;
let bg, bc, bd;
let fonts = [];
let maxCars = 5;
let frogPos;
let state = -1;
let timer = 0;
let song1, song2, song3, song4;
var monkey;
var banana;

function preload() {
  song1 = loadSound("assets/welcome.mp3")
  song2 = loadSound("assets/game.mp3")
  song3 = loadSound("assets/win.mp3")
  song4 = loadSound("assets/lose.mp3")
}

function setup() {
  createCanvas(600, 600);
  frogPos = createVector(width/2, height-80);
  textAlign(CENTER);
  textSize("40");
  rectMode(CENTER);

  monkey = loadImage("assets/monkey.png");
  banana = loadImage("assets/banana.png");

  f1 = loadFont("assets/KGChasingCars.ttf");
  f2 = loadFont("assets/rock.ttf");
  f3 = loadFont("assets/spaceage.ttf");
  bg = loadImage("assets/background.JPG");
  bc = loadImage("assets/start.jpg");
  bd = loadImage("assets/lose.jpg");

  fonts = [f1, f2, f3];

  // Spawn  objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function touchStarted() {
  getAudioContext().resume();
}

function draw() {
  switch(state) {
  case -1:
  song1.loop();
  state = 0;
  break ;

  case 0:
  //background ("assets/start.jpg");
  image(bc, 0, 0, width, height);
  textFont(f2);
  textSize(52);
  fill('black');
  text("The Game!", width/2, height - 100);
//image for menu
  break ;

  case 1:
  game();
  timer++;
  if (timer > 10*60) {
    state = 3;
    song2.pause();
    song4.loop();
  }
  break ;

  case 2:
  background('red');
  textSize(52);
  fill('white');
  text("YAY YOU WON!", width/2, height/2);
  break ;

  case 3:
  image(bd, 0, 0, width, height);
  //background('purple');
  textSize(64);
  fill('#e75480');
  text("YOU LOST", width/2, height - 540);
  break ;
  }

}

function game(){

    image(bg, 0, 0, width, height);

    // display and move objects
    for (let i = 0; i < cars.length; i++) {
      cars[i].display();
      cars[i].move();
      if (cars[i].pos.dist(frogPos) < 50) {
        cars.splice(i, 1);
      }
    }

    if (cars.length == 0) {
      song2.pause();
      song3.loop();
      state = 2;
    }

    //draw the frog
    //fill('yellow');
    //ellipse(frogPos.x, frogPos.y, 25, 50);
    image(monkey, frogPos.x, frogPos.y, 90, 90);
    checkForKeys();
}

function resetTheGame() {
  cars = [] ;
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function mouseReleased() {
  switch(state){

    case 0:
    song1.pause();
    song2.loop();
    state = 1;
    break ;

    case 2: //they won
    song3.pause();
    resetTheGame();
    state = 0;
    break ;

    case 3: //they lost
    song4.pause();
    resetTheGame();
    state = 0;
    break ;
  }

}

// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-3, 5), random(-3, 5));
    this.size = random(40, 80);
    this.c = color(random(255), random(255), random(255));

  let b = floor(random(3)); //random # between 0 and 2.999
    this.font = fonts[b];
  }

  // methods
  display() {
    //rect(this.pos.x, this.pos.y, 50, 25);
    //fill(this.c);
    //textFont(this.font);
    //textSize(this.size);
    image(banana, this.pos.x, this.pos.y, 120, 120);
    //image(name, this.pos.x, this.pos.y);
  }


  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

// function touchStarted() {
//   getAudioContext().resume();
// }
