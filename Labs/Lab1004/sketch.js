//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  var list = [4, 2, 1, 5, 7, 9];
  swap (list, 1, 2)
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
ellipse(200, 320, 300, 269);
fill(200, 148, 0);
}
