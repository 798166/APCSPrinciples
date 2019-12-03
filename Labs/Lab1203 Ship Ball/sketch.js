//  Will Kreidler
// 	1202
//  This is a comment
//  The setup function function is called once when your program begins
var ships = [];
var mainPlanet;
//var mainBallrep;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects(300);//  b1 = new Ball(random(width), random(height), random(-9,9), random(-9,9));
//  b2 = new Ball(random(width), random(height), random(-9,9), random(-9,9));
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20 ,20, 20);
  runObjects();// b1.run();
// b2.run();
}

function loadObjects(n){
  mainPlanet = new Planet(width/2, height/2, random(-1,1), random(-1,1), -1);
  //mainBallrep = new Ball(width/2, height/2, random(-1,1), random(-1,1), -2);
  for(var i = 0; i < 1; i++){
    ships[i] = new Ship(random(width), random(height), random(-2, 2),random(-2, 2), i);
  }
}

function runObjects(){
  mainPlanet.run();
//  mainBallrep.run();
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
  }
}
