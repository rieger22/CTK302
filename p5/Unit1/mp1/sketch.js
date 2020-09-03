function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('black');


  if (mouseIsPressed) {
    //background, shapes, colors
    background('red');
  } else {
    //normal stuff!

  }
  ellipse(100, 100, 100, 100);

  text(mouseX + " , " + mouseY, 10, 20);

}
