//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
class Ship{
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
  if(this.id>=0){
  if(this.loc.x < 0){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.x > width){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.y < 0){
    this.vel.y = -this.vel.y;
  }
  if(this.loc.y > height){
    this.vel.y = -this.vel.y;
  }
}

  update(){
    var distTomainBallatt;
    var distTomainBallrep;
    if(this.id>=0){
      distTomainBallatt = this.loc.dist(mainBallatt.loc);
      distTomainBallrep = this.loc.dist(mainBallrep.loc);
      //attraction
      if (distTomainBallatt<200){
        this.acc = p5.Vector.sub(mainBallatt.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      //repulsion
      if(distTomainBallrep<100){
        this.acc = p5.Vector.sub(this.loc, mainBallrep.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }
    }
    this.vel.limit(5);
    this.loc.add(this.vel);
    this.vel.add(this.acc);
  }

  render(){
    this.angle = this.angle + .1;
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    triangle(-5,8,5,8,0,-8)
    pop();
    //this.clr = color(random(255), random(255), random(255));
    fill(this.clr);
  }
}
