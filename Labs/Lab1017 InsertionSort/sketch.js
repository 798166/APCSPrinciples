//  Will Kreidler
// 	1021
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];
var temp;
function loadList(n){
  for(var i = 0; i < n; i++){//keeps adding numbers to  array until i < n
    list.push(int(random(0, 1000)));//pushes random number between 0 and 1000 into  array
  }
}//function generates  random array with as many numbers as input is


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadList(10000);
  console.log(list);
  for(var i = 1; i < list.length; i++){
    for(var j = i; j > 0; j--){
      if(list[j] < list[j - 1]){
        swap(list, j, j - 1);
      }
    }
  }
  console.log(list);
  var evenodd = list.length % 2;
   var halflengtheven = 0.5 * list.length;
   var halflengthodd = (0.5 * list.length) - 0.5;
   var median = 0;
   if(evenodd === 0){
     median = (list[halflengtheven] + list[halflengtheven - 1])/2
     console.log('median: ' + median);
   }else{
     median = list[halflengthodd];
     console.log('median: ' + median)
  }
}
