//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
class Snake{
  constructor(x, y, dx, dy, w, id){
    this.loc = createVector(x,y)
    this.loc = createVector(dx,dy)
    this.w = 25;
    this.id=id;
  }

  run(){
    this.render();
    this.checkEdges();
    this.update();
  }

  render(){
    background(20,20,20);
    fill(this.clr);
    rect(this.loc.x, this.loc.y,this.w,this.w);
  }

  checkEdges(){

  }

  update(){
    this.vel=0;
    if(keyIsPressed&&
      keyCode=== RIGHT_ARROW){
        this.vel=3;
      }
      if(keyIsPressed&&
        keyCode=== RIGHT_ARROW){
        this.vel=3;
        }
    this.loc.add(this.vel);
  }
}//end of snake class
