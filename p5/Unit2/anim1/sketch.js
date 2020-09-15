var x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

    textSize(30);
    text("Sham WOW!", x, 250) ;

  x += 5 ;


  if (x > width) {
    x = -500 ;
  }

}
