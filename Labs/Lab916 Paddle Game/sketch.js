//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var paddle;
var score = 0;
var gameState = 1;
var gameMode;
var b;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
} //end of setup

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
} //end of draw

function startGame(){
  if(gameMode === 1){
    b = 2;
  }else if(gameMode === 2){
    b = 3
  }else if(gameMode === 3){
    b = 5 //hard mode: balls go faster, start with negative points
  };
  loadObjects(3,0)
  textSize(75);
  text('Paddle Ball!', 235, 300);
  fill(255, 0, 0);
  textSize(25);
  text('Easy', 200, 575);
  rect(200, 600, 60, 60);
  fill(0, 255, 0);
  text('Medium', 400, 575);
  rect(400, 600, 60, 60);
  fill(0, 0, 255);
  text('Hard', 600, 575);
  rect(600, 600, 60, 60);
  if(mouseIsPressed &&
  mouseX > 200 &&
  mouseX < 260 &&
  mouseY > 600 &&
  mouseY < 660){
    gameMode = 1;
    gameState = 2;
  }else if(mouseIsPressed &&
  mouseX > 400 &&
  mouseX < 460 &&
  mouseY > 600 &&
  mouseY < 660){
    gameMode = 2;
    gameState = 2;
  }else if(mouseIsPressed &&
  mouseX > 600 &&
  mouseX < 660 &&
  mouseY > 600 &&
  mouseY < 660){
    gameMode = 3;
    gameState = 2;
  }
} //end of startGame

function playGame(){
  runObjects();
  fill(0,0,0);
  textSize(25);
  text('Score:' + score, 50, 30);
}//end of playGame

function endGame(){
  background(65,55,237);
} //end of endGame

function loadObjects(b){
  for(var i =0; i < b; i++){
    balls[i] = new Ball(random(800), random(300), random(0, 5), random(0,5));
  }
  paddle = new Paddle(250, 700, 200, 25);
}

function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++) balls[i].run();
}
