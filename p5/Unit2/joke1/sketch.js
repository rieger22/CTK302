let timer = 0;
let myState = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
}

function draw() {
  switch (myState) {
    case 0:
      background('purple');
      text("My roomie kept telling me \n I have no sense of direction", 250, 250);
      break;


    case 1:
    background('orange');
    text("So I packed up my stuff and right.", 250, 250);
    break;

  }
}


function mouseReleased() {
  myState++;
  if (myState > 1) {
    myState = 0;
  }
}
