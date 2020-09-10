function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('#915118');


  if (mouseIsPressed) {
    //background, shapes, colors
    background('blue');

    //head
    fill('#ff69b4');
    ellipse(250, 150, 100, 100);
    //body
    fill('yellow');
    rect(225, 200, 50, 100);
    //left leg
    fill('black');
    rect(225, 300, 15, 75);
    //right leg
    rect(260, 300, 15, 75);

    //left arm 1
    fill('#009900');
    rect(150, 200, 75, 10);
    //left arm 2
    rect(140, 230, 85, 10);
    //left arm 3
    rect(150, 260, 75, 10);

    //right arm 1
    rect(275, 200, 75, 10);
    //right arm 2
    rect(275, 230, 85, 10);
    //right arm 3
    rect(275, 260, 75, 10);

    //smile
    fill('black');
    arc(250, 170, 40, 20, 0, PI);

    //left eye
    fill('red');
    ellipse(225, 140, 15, 10);

    //right eye
    fill('red');
    ellipse(275, 140, 15, 10);

    //building
    fill('white');
    rect(210, 440, 80, 100);
    //roof
  fill('grey');
  triangle(210, 440, 250, 400, 290, 440);
//door
fill('#915118');
rect(240, 470, 20, 30)
  } else {
    //normal stuff!
//body
    rect(225, 200, 50, 100, 20);
    fill('white')
//smile
    arc(250, 230, 40, 20, 0, PI);
//left eye
      ellipse(240, 220, 15, 10);
//right eye
ellipse(260, 220, 15, 10);
  }

//  text(mouseX + " , " + mouseY, 10, 20);

}
//9/5 2 hours planning
//9/6 1 hour researching
//9/7 1 hour coding
//9/8 2 hours coding
//9/9 2 hours tweaking
