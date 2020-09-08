function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('blue');


  if (mouseIsPressed) {
    //background, shapes, colors
    background('#ff69b4');

//head
ellipse(250, 150, 100, 100);
    fill('yellow')
//body
rect(225, 200, 50, 100);
//left leg
rect(225, 300, 15, 75);
//right leg
rect(260, 300, 15, 75);

//left arm 1
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
arc()

//left eye

//right eye

  } else {
    //normal stuff!
ellipse(250, 150, 100, 100);
fill('white')
  rect(225, 200, 50, 100);



  }

  text(mouseX + " , " + mouseY, 10, 20);

}
