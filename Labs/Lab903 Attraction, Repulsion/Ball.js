//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
class Ball{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0)
    this.clr = color(random(255), random(255), random(255));
    this.w = 15;
    this.id = id;
    if(this.id < 0) {this.w = 50;}
    else{
      this.w = 15
    }
  }
run(){
  this.checkEdges();
  this.update();
  this.render();
  }

checkEdges(){
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
    var distTomainBall;
    if(this.id>=0){
      distTomainBall = this.loc.dist(mainBall.loc);
      if (distTomainBall<200){
        this.acc = p5.Vector.sub(mainBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      if(distTomainBall<100){
        this.acc = p5.Vector.sub(this.loc, mainBall.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }
    }
    this.vel.limit(5);
    this.loc.add(this.vel);
    this.vel.add(this.acc);
  }
  render(){
    this.clr = color(random(255), random(255), random(255));
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }
}
