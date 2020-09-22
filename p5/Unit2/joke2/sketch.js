let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
}

function draw() {

  switch(state){

  case 0:
  background('red');
  text("What concert costs just 45 cents?", 250, 250);
  timer++ ;

//5seconds
  if (timer > 5*60) {
    state = 1;
    timer = 0;
  }

    break;

  case 1:
  background('blue');
  text("50 Cent featuring Nickelback!", 250, 250);
    break;
  }
}
