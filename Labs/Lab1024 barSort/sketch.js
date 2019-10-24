/*Will Kreidler
**Lab 1007 Ball
**Checker Board
**
*/


//  Global variables
var squares = []  // declare b1 as a global variable


// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  loadSquares();
  //  traverse array and run each ball
  for(var i = 0; i < squares.length; i++){
   squares[i].render();
  }
}


function loadSquares(){
  for(var i=0; i<8; i++){
    for(var x=0; x<8, x++){
      if(i%2===0){
        if(x%2===0){
          var shade= color(0, 0, 0);
        }
        if(x%2!==0)
          var shade = color(255,255,255);
      }
    }
    if(i%2!==0){
      if(x%2!==0){
        var shade = color(0,0,0);
      }
      if(x%2===0){
        var shade= color(255,255,255);
      }
    }
    squares[x+(8*i)]= new Square(100*x,100*i,100,100, shade);
  }

}


}
