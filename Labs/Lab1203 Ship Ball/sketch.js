//  Will Kreidler
// 	1202
//  This is a comment
//  The setup function function is called once when your program begins
var ship;
var planet;
var sliderVel, sliderAtt, sliderText;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20,);
  loadObjects();
  sliderText= createP("Attraction Slider");
  sliderText.position(200,370);
  sliderAtt=

}
//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5, 50);
  runShips();

}

function loadObjects(n){
  planet = new Planet(random(800), random(800), random(-1, 1), random(-1,1));
  ship = new Ship(random(width), random(height), random(-2, 2), random(-2, 2));
} // end of loadObjects

function runShips(){
  planet.run();
  ship.run();

} //end of runShips
