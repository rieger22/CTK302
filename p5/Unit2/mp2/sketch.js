var mic;
var vol;
var img1, img2, img3;
let state = 0;
let x = 0;


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
    text("Make some noise for your favorite band!\nClick to start.", 250, 250);
    if (vol > .03) {
      state = 1;
    }
    break ;


    case 1:
    background('purple');
    textAlign(CENTER);
    textSize(32);
    text("Shiner", 250, 250);
    image(img1, width / 2, height / 2, 200, 200);
    if (vol > .05) {
      state = 2;
    }
    break ;

    case 2:
    background('red');
    textAlign(CENTER);
    textSize(32);
    text("HUM", 250, 250);
    if (vol > .1) {
      state = 3;
    }
    break ;

    case 3:
    background('yellow');
    textAlign(CENTER);
    fill('purple');
    textSize(32);
    text("POSTER CHILDREN!!!", 250, 250);
    break ;
  }

}

function mouseReleased() {
  state++;
  if (state > 3) {
    state = 0 ;
  }
}

  function touchStarted() {
    getAudioContext().resume();
}
