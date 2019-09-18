//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var paddle;
var score = 0;
var gameState = 1;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadObjects(3);
}

function draw() {
  if(gameState === 1){
    startGame();
  }
  if(gameState === 2){
    playGame();
  }
  if(gameState === 3){
    endGame();
  }
  background(255,255,255, 60);
  fill(2, 2, 2)
}

function startGame(){
  textSize(75);
  text('Paddle Ball!', 400, 300);
  fill(20, 100, 130);
  textSize(25);
  text('Easy', 200, 575)
  rect(200, 600, 60, 60)
  text('Medium', 400, 575)
  rect(400, 600, 60, 60)
  text('Hard', 600, 575)
  rect(600, 600, 60, 60)
}

function playGame(){
  runObjects();
  textSize(25);
  text("Score:" + score, 50, 30);
}

function endGame(){

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
