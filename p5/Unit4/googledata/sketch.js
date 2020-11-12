var bubbles = [];
var img1;
let song1;

// function preload() {
//   song1 = loadSound("assets/ .mp3")
// }

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1sv3UhEh3ZLlfDkDa377m8TVQ_rRRToL0kzphoToxMtc'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff

  // Regular setup code we usually have
  createCanvas(600, 600);
  imageMode(CENTER);
  img1 = loadImage("assets/background.jpg");

  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Avenger, data[i].Star, data[i].Scooby)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }
}


function draw() {
  background('purple');
  image(img1, width / 2, height / 2, 400);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }
}


// my Bubble class
class Bubble {

  constructor(myAvenger, myStar, myScooby) {
    this.avenger = myAvenger;
    this.star = myStar;
    this.scooby = myScooby;
    this.pos = createVector(random(width), random(height));
    this.vel = random(1,3);
  }

  display() {
    // if (this.shape == "Square") {
    //   rect(this.pos.x, this.pos.y, 50, 50);
    //   // image(name, this.pos.x...)
    // } else {
    //   ellipse(this.pos.x, this.pos.y, 50, 50);
    // }
    fill('black');
    ellipse(this.pos.x, this.pos.y, 90, 90);
    fill('#add8e6');
    text(this.avenger, this.pos.x, this.pos.y - 20)
    fill('red');
    text(this.star, this.pos.x, this.pos.y);
    fill('orange');
    text(this.scooby, this.pos.x, this.pos.y + 20);
  }

  drive() {
    this.pos.y = this.pos.y + this.vel ;
    if (this.pos.y > height) this.pos.y = 0;
  }

}
