//  Will Kreidler
// 	1202
//  This is a comment
//  The setup function function is called once when your program begins
class Planet{
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
  if(this.id<0){
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
    var distTomainPlanet;
    //var distTomainballrep
    if(this.id>=0){
      distTomainPlanet = this.loc.dist(Planet.loc);
      //distTomainBallrep = this.loc.dist(mainBallrep.loc);
      //attraction
      if (distTomainPlanet<100){
        this.acc = p5.Vector.sub(Planet.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      //repulsion
      //if(distTomainPlanet<100){
        //this.acc = p5.Vector.sub(this.loc, mainPlanet.loc);
        //this.acc.normalize();
        //this.acc.mult(0.5);
      //}
    }
    this.vel.limit(5);
    this.loc.add(this.vel);
    this.vel.add(this.acc);
  }
  render(){
    //this.clr = color(random(255), random(255), random(255));
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }
}
