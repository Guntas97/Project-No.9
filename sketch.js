var marks = [30,25,40,45,50,55];

function marks_average(){
  var sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5];
  var avg = sum/marks.length;
  console.log(avg);
}


function setup() {
  createCanvas(400, 400);
  marks_average();
}

function draw() {
  background(220);
}