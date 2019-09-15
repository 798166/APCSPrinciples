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
      if(this.loc.x>800){
        //this.loc.x=0 //mainBall warp
        this.vel.x = -this.vel.x; //mainBall bounce off wall
      }
      if(this.loc.x<0){
        //this.loc.x=800 //mainBall warp
        this.vel.x = -this.vel.x; //mainBall bounce off wall
      }
      if(this.loc.y>800){
        //this.loc.y=0 //mainBall warp
        this.vel.y = -this.vel.y; //mainBall bounce off wall
      }
      if(this.loc.y<0){
        //this.loc.y=800 //mainBall warp
        this.vel.y = -this.vel.y; //mainBall bounce off wall
      }
    }
  }

  update(){
    var distTomainBallatt;
    var distTomainBallrep;
    if(this.id>=0){
      distTomainBallatt = this.loc.dist(mainBallatt.loc);
      distTomainBallrep = this.loc.dist(mainBallrep.loc);
      this.vel.limit(7);
      this.loc.add(this.vel);
      this.vel.add(this.acc);
      //attraction
      if (distTomainBallatt<200){
        this.acc = p5.Vector.sub(mainBallatt.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      //repulsion
      if(distTomainBallrep<50){
        this.acc = p5.Vector.sub(this.loc, mainBallrep.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }
    }
  }

  render(){
    this.heading = this.vel.heading();
    this.angle = this.angle + .1;
    push();
      translate(this.loc.x, this.loc.y);
      rotate(this.heading + 1.5);
      triangle(-5,8,5,8,0,-8)
    pop();
    //this.clr = color(random(255), random(255), random(255));
    fill(this.clr);
  }
}
