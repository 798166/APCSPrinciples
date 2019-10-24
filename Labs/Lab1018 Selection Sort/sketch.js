//  Will Kreidler
// 	1018
//  This is a comment
//  The setup function function is called once when your program begins
var list=[]
var temp;

function loadList(n){
  for(var i = 0; i < n; i++)//keeps adding numbers onto the array until i < n, the number of items in the array
    list.push(int(random(0, 1000)));//pushes a random integer between 0 and 1000 into the array
}


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadList(1000);
  console.log(list);
  //sorting code
  for(var i=0; i<list.length-1; i++){
    var index= i;
    for(var j = i + 1; j<list.length; j++){
      if(list[j]<list[index]){
        index = j;
      }
    }
    swap(list, index, i);
  }
  console.log(list);
}

//  The draw function is called @ 30 fps
function draw() {
ellipse(200, 320, 300, 269);
fill(200, 148, 0);
}

function swap(list, a, b) {
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
