//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
class Ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255), random(255), random(255));
    //this.acc = createVector(0,1)
  }
run(){
  this.checkedges();
  this.update();
  this.render();
  }

checkedges(){
  if(this.loc.x < 0){
    this.dx = -this.vel.dx;
  }
  if(this.loc.x > width){
    this.dx = -this.vel.dx;
  }
  if(this.loc.y < 0){
    this.dy = -this.vel.dy;
  }
  if(this.loc.y > height){
    this.dy = -this.vel.dy;
  }
}
  update(){
    this.loc.add(this.vel);
    //this.vel.add(this.acc);
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);
  }
}
