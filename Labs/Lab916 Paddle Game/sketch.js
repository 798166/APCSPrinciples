//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var paddle;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadObjects(3);
}

function draw() {
  background(255,255,255, 60);
  runObjects();
  fill(2, 2, 2)
}

function loadObjects(n){
  for(var i =0; i < n; i++){
    balls[i] = new Ball(random(800), random(300), random(0, 5), random(0,5));
  }
  paddle = new Paddle(250, 700, 200, 25);
}

function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++) balls[i].run();
}
