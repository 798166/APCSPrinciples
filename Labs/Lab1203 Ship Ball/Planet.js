//  Will Kreidler
// 	1202
//  This is a comment
//  The setup function function is called once when your program begins
class Planet{
  constructor(x, y, dx, dy){
    this.w=15;
    this.clr = color(random(255),random(255),random(255));
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0)
    this.w = 50;
}
run(){
  this.render();
  this.checkEdges();
  this.update();
}
render(){
  fill(this.clr)
  ellipse(this.loc.x, this.loc.y, this.w, this.w);
}
  checkEdges(){
    if(this.loc.x < 0 || this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0 || this.loc.y > height){
      this.vel.y = -this.vel.y;
    }
  }
update(){
if(ship.loc.x < this.loc.x+100  && ship.loc.x > this.loc.x-100 && ship.loc.y < this.loc.y + 100 && ship.loc.y > this.loc.y - 100){
    planet = new Planet(random(800), random(800), random(-1, 1), random(-1,1));
}
  this.vel.limit(8);
  this.loc.add(this.vel);
  this.vel.add(this.acc);
}//end of update

}//end of ball class
