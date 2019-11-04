//  Will Kreidler
// 	1031

segments=[];
hitFood='no';
food=[];
score=0;
w=25;
headerHeight=32;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  endGame= 'no';
  loadSnake();
  loadFood();
}

function draw() {
  runSnake();
  runFood();
if (endGame==='yes'){
  remove();
  clear();
}
}

function loadSnake(){
  segments[0]=new Snake(0,0,50,50,0);
}

function loadFood(){
  food[0]= new Food(random(800),random(800),25,0);
}

function runFood(){
  for (var i=0; i<food.length;i++){
    food[i].run();
  }
}
function runSnake(){
  for (var i=0; i<segments.length; i++){
    segments[i].run();
    if (hitFood==='yes'){
      segments[i+1]= new Snake(segments[i].loc.x-segments[i].w,segments[i].loc.y,50,50,i+1);
      hitFood='no';
    }
  }
}
