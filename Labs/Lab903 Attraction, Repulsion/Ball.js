//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
class Ball{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255), random(255), random(255));
    this.w = 15;
    this.id = id;
    if(this.id < 0) {this.w = 50;}
    //this.acc = createVector(0,1)
  }
run(){
  this.checkedges();
  this.update();
  this.render();
  }

checkedges(){
  if(this.loc.x < 0){
    this.vel.dx = -this.vel.dx;
  }
  if(this.loc.x > width){
    this.vel.dx = -this.vel.dx;
  }
  if(this.loc.y < 0){
    this.vel.dy = -this.vel.dy;
  }
  if(this.loc.y > height){
    this.vel.dy = -this.vel.dy;
  }
}
  update(){
    this.loc.add(this.vel);
    //this.vel.add(this.acc);
    this.acc = p5.Vector(this.loc, other.loc);
    this.acc.normalize();
    this.acc.mult(0.5);
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);
  }
}
