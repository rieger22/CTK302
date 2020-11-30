// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temperature = 0;
var humidity = 0;
var name;
var image1;
var image2;


function setup() {
  createCanvas(500, 500);

  imageMode(CENTER);
  image1 = loadImage("assets/glen.jpg");
  image2 = loadImage("assets/monkey1.png");

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Glen Ellyn,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=f9f29622260b6fbf193ddea3219950e6'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  name = weather.name;

}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background('purple');
      image(image1, width/2, height/2);
      fill('yellow');
    //  textFont()
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("humidity is " + humidity, '%', 20, 60);
      text("temperature is " + temperature, 20, 80);



      // cloud
      //fill(255 - humidity)
      fill('white');
      noStroke();
      image(image2, x, 300, 200, 100);
    //  ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed;
      if (x > width) x = 0;

      break;

  }
}
