/*Will Kreidler
**Lab 1024 Bar
**
**
*/


//  Global variables
var bars = [];
var numBars, barWidth;

function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(37, 165, 200);
  barWidth = 25;
  numBars = width/barWidth;
  loadBars(numBars);
  frameRate(5);
  for(var i=0; i<bars.length; i++){
    bars[i].run();
  }
}

function draw(){
  Bubblesort();
}

function loadBars(num){
  for(var i = 0; i < num; i++){
    var barHeight = random(height);
    bars[i] = new Bar((i*25),0,25,barHeight,color(20,20,20));
  }
}

function runBars(){
  for(var i=0; i<bars.length; i++){
    bars[i].set(i);
  }
  background(37, 165, 200);
  for(var i=0; i<bars.length; i++){
    bars[i].run();
  }
}

function Bubblesort(){
  for (var j=0; j<bars.length-1; j++){
    if(bars[j].h>bars[j+1].h){
      swap(bars, j, j+1);
      runBars();
    }
  }
}

function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
