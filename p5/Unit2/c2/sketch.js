var mic;
var vol;
var c = 'red' ;
let x = 0;
let state = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background('red');

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

switch (state) {
  case 0:
  background('red');
  text("shhhh!", 250, 250);
  if (vol > .05) { // if the volume is LOUD?
    // do something
  //c = color(random(255), random(255), random(255)) ; // here I'm setting the background to a random color
  state = 1;
  }
  break ;

  case 1:
  background('green');
  text("QUIET DOWN!", 250, 250);
  if (vol < .05) {
  state = 0;
  }
  break ;

}
  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
