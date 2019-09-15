//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
class Ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0)
    this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
    this.isColliding();
  }

  checkEdges(){
    if(this.loc.x<0 || this.loc.x>width){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y<0 || this.loc.y>height){
      this.vel.y = -this.vel.y
    }
  }

  update(){
    this.vel.limit(5);
    this.loc.add(this.vel);
    this.vel.add(this.acc);
  }

  render(){
    //this.clr = color(random(255), random(255), random(255));
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }

  isColliding(){
    if(this.loc.x > paddle.loc.x &&
      this.loc.x < paddle.loc.x + paddle.w &&
      this.loc.y > paddle.loc.y &&
      this.loc.y < paddle.loc.y + paddle.h){
        this.vel.y = -this.vel.y;
    }
  }
}
