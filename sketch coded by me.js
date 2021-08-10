var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,50);
}

function draw() 
{
  background("black");
 if(keyIsDown(RIGHT_ARROW)){
 background('red');
 }
if(keyIsDown(LEFT_ARROW)){
background('orange');
}
if(keyIsDown(UP_ARROW)){
background('yellow');
}
if(keyIsDown(DOWN_ARROW)){
background('green');
}
if(keyIsDown(SHIFT)){
background('blue');
}
if(keyIsDown(BACKSPACE)){
background('indigo');
}
if(keyIsDown(ENTER)){
background('violet');
}
 drawSprites();
}




