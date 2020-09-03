var img1, img2, img3;

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);

  img1 = loadImage("assets/1.jpg");
  img2 = loadImage("assets/2.jpg");
  img3 = loadImage("assets/3.jpg");

}

function draw() {

  image(img1, width / 2, height / 2, 200, 200);
  image(img2, width / 2, height / 2 - 210, 200, 200);
  image(img3, width / 2, height / 2 + 210, 200, 200);

}
