var nonplayer
var nonplayer1
var nonplayer2
var player1

function preload(){
  nonplayerimg=loadImage("nonplayer.png");
  nonplayer1img=loadImage("nonplayer1.png");
  nonplayer2img=loadImage("nonplayer2.jpg");
  player1img=loadImage("player1.png");
}


function setup() {
  createCanvas(800,400);
  nonplayer=createSprite(100,100,10,10);
  nonplayer1=createSprites(200,100,10,10);
  nonplayer2=createSprites(300,100,10,10);
  player1=crateSprites(400,100,10,10);

  nonplayer.addImage(nonplayerimg);
  nonplayer1.addImage(nonplayer1img);
  nonplayer2.addImage(nonplayer2img);
  player.addImage(playerimg);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}