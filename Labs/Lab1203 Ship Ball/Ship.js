//  Will Kreidler
// 	1202
//  This is a comment
//  The setup function function is called once when your program begins
class Ship{
  constructor(x, y, dx, dy) {
    this.clr = color(random(255),random(255),random(255));
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    //this.angle = 0;
  } //end of constructor

run(){
  this.render();
  this.update();
  this.checkEdges();
} //end of run

render(){
  this.heading = this.vel.heading();
  fill(this.clr);
  this.angle = this.angle + .1;
  push();
    translate(this.loc.x, this.loc.y);
    rotate(this.heading + 1.5);
    triangle(-5, 8, 5, 8, 0, -8);
  pop();
} // end of render

checkEdges(){
  if(this.loc.x < 0) this.loc.x = width;
  if(this.loc.x > width) this.loc.x = 0;
  if(this.loc.y < 0) this.loc.y = height;
  if(this.loc.y > height) this.loc.y = 0;
}

update(){
  var distToplanet
    distToplanet = this.loc.dist(planet.loc);

    if(distToplanet < 800){
      this.acc = p5.Vector.sub(planet.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(.1);
    }
  this.vel.limit(5);
  this.loc.add(this.vel);
  this.vel.add(this.acc);
}

}//end of ship class
