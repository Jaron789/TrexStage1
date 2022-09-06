
var trex ,trex_running;

function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(700,200);
  trex = createSprite(60,160,20,14);
  trex.addAnimation("trexrunning",trex_running);
  trex.scale = 0.7;

}

function draw(){
  background(211);
  if(keyDown("space")){ 
    trex.velocityY = -10;
  }
drawSprites();
}

