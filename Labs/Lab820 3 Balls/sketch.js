//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  x=random(-200, 200);
  y=random(-400, 400);
  speedX = random(-10.0, 10.0);
  speedY = random(-13.0, 13.0);
}

//  The draw function is called @ 30 fps
function draw() {
  x=x+speedX
  y=y+speedY
if(x>0){
  speedX = -speedX
}
if(x<800){
  speedX = -speedX
}
if(y>0){
  speedY = -speedY
}
if(y<800){
  speedY = -speedY
}

background(20, 20, 20);

fill(0, 200, 0);
ellipse(x, y, 30, 30);

fill(200, 0, 0);
ellipse(x,y, 50, 50);

fill(0, 0, 255);
ellipse(x, y, 70, 70);
}
