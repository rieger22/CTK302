function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  ellipse(100, 100, 100, 100);

  if(mouseIsPressed) {
    //background, shapes, colors
    background('red');
  } else {
//normal stuff!

  }




text(mouseX + " , " + mouseY, 10, 20);
}
