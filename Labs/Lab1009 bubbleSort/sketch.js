//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  var list = [4, 2, 1, 5, 7, 9];
  swap (list, a, b)
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  function bubbleSort(){
      if(list[a]>list[b]){
        //swapping code
        var temp = list[a];
        list[a] = list[b];
        list[b] = temp;
      }
      //swapping code
    }
  console.log(list);
}

function draw(){

}
