//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []; //var b1, b2;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(50);//  b1 = new Ball(random(width), random(height), random(-9,9), random(-9,9));
//  b2 = new Ball(random(width), random(height), random(-9,9), random(-9,9));
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20 ,20, 20);
  runBalls();// b1.run();
// b2.run();
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball (random(width), random(height), random(-7, 7),random(-7, 7));
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
