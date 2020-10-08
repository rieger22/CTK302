var mic;
var vol;
var img1, img2, img3;
var x = 0;
let state = 0;
//let x = 0;

function setup() {
  createCanvas(500, 500);

  imageMode(CENTER);
  img1 = loadImage("assets/shiner.jpg");
  img2 = loadImage("assets/hum.jpg");
  img3 = loadImage("assets/pc.jpg");

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  vol = (mic.getLevel()).toFixed(2);

  switch (state) {
    case 0:
      background('black');
      textAlign(CENTER);
      fill('white');
      textSize(24);
      translate(x, 0);
      text("Make some noise for your favorite band!\nClick to start.", x, 250);
      x += 2;
      if (x > width) {
        x = -50;
      }

      if (vol > .03) {
        state = 1;
      }
      break;


    case 1:
      background('purple');
      textAlign(CENTER);
      fill('yellow');
      textSize(32);
      text("Shiner\nEhhh, good start I guess", 250, 450);

      translate(x, 0);
      image(img1, width / 2, height / 2, 400, x);
      x += 3;
      if (x > width) {
        x = -500;
      }

      if (vol > .05) {
        state = 2;
      }
      break;

    case 2:
      background('red');
      textAlign(CENTER);
      fill('blue');
      textSize(32);
      text("HUM\nI'm glad you're trying now", 250, 450);

      image(img2, width / 2, height / 2, x, 300);
      x += 3;
      if (x > width) {
        x = -500;
      }

      if (vol > .1) {
        state = 3;
      }
      break;

    case 3:
      background('yellow');
      textAlign(CENTER);
      fill('purple');
      textSize(32);
      image(img3, width / 2, height / 2, 400, 300);
      translate(x, 0);

      text("POSTER CHILDREN!!\nYOU DID IT", x, 450);
      x += 2;
      if (x > width) {
        x = -75;
      }
      break;
  }

}

function mouseReleased() {
  state++;
  if (state > 3) {
    state = 0;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
