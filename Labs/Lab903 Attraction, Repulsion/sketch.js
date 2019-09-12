//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = [];
var mainBall;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(500);//  b1 = new Ball(random(width), random(height), random(-9,9), random(-9,9));
//  b2 = new Ball(random(width), random(height), random(-9,9), random(-9,9));
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20 ,20, 20);
  runBalls();// b1.run();
// b2.run();
}

function loadBalls(n){
  mainBallatt = new Ball(width/2, height/2, random(-1,1), random(-1,1), -1);
  mainBallrep = new Ball(width/2, height/2, random(-1,1), random(-1,1), -2);
  for(var i = 0; i < n; i++){
    ships[i] = new Ship (random(width), random(height), random(-2, 2),random(-2, 2), i);
  }
}

function runBalls(){
  mainBallatt.run();
  mainBallrep.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
