let angle1=0;
let angle2=0;
let angle3=0;
let angle4=0;
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;


function setup() {
  
  createCanvas(width, height);
  rectMode(CENTER);
  angleMode(DEGREES);

}

function draw() {

  background('black');

  fill('maroon');
  ellipse(width/2,height/2,395,395);

  push();
  translate(width/2,height/2); 
  rotate(angle4);
  fill('yellow');
  rect(0, 0, 280, 280);
  pop();  //The origin is back to (0, 0) and rotation is back to 0.
  angle4 += 2; 


  fill('cyan');
  ellipse(width/2,height/2,280,280);


  push();
  translate(width/2,height/2); 
  rotate(angle3);
  fill('blue');
  rect(0, 0, 195, 195);
  pop();  //The origin is back to (0, 0) and rotation is back to 0.
  angle3 += 0.7; 

  push();
  translate(width/2,height/2); 
  rotate(angle2);
  fill('green');
  rect(0, 0, 140, 140);
  pop();  //The origin is back to (0, 0) and rotation is back to 0.
  angle2 -= 1; 


  push();
  translate(width/2,height/2); 
  rotate(angle1);
  fill('orange');
  rect(0, 0, 100, 100);
  pop();  //The origin is back to (0, 0) and rotation is back to 0.
  angle1 += 2;

}
