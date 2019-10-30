//Will Kreidler
//1007
/*
*/
class Bar{
//  Add perameters to your constructor function
constructor(x,y,w,h,clr){
  this.loc = createVector(x,y)
  this.w = w;
  this.h = h;
}
run(){
  this.render();
}

render(){
  fill(134, 0, 216);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
  set(i){
    this.loc.x = i * 25;
  }
}

//function Sqr(){
//  Add instance variables to your constructor Function
//What does a square need to know about itself??

  //this.render = function(){

//  }

//}
//  End of Square constructor function
