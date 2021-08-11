var sea, sea_running, edges;
var ship;
var ship_1;
function preload(){
sea_running=loadImage("sea.png");
ship_1=loadAnimation("ship-1.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,100,50);
  sea.addImage("sea",sea_running);
  sea.scale=0.7;
  //sea.velocityX=-2
  //ship=createSprite(200,200,50,50);
  //ship.addAnimation("ship-1",ship_1);
  
  
}

function draw() {
  if(sea.x<0){
  sea.x=sea.width/2
  }
 drawSprite();
}