const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var maxDrops = 100;
var maxDrops1 = 200;
var maxDrops2 = 300;
var manImg,man;
var thunderCreatedFrame;
var thunder,thunImg1,thunImg2;

function preload(){
 manImg = loadImage("proc41images/images/Walking Frame/walking_1.png");
 thunImg1 = loadImage("proc41images/images/thunderbolt/1.png");
 thunImg2 = loadImage("proc41images/images/thunderbolt/2.png");
}

function setup(){
 createCanvas(400,800);
 engine = Engine.create();
 world = engine.world;

 //create man and add image
 man = createSprite(190,700,15,15);
 man.addImage(manImg);
 man.scale = 0.30;

 //use for loop to create a raining effect
 for(var i = 10;i < maxDrops;i+ 10){
    maxDrops = new Drop(random(0,400),random(10,800))
    maxDrops1 = new Drop(random(0,400),random(10,500))
    maxDrops2 = new Drop(random(0,400),random(10,400))
    


}
Engine.run(engine);
}

function draw(){
 background(0,0,0);
 Engine.update(engine);

 var rand = Math.round(random(1,4));

 //write code to create thunder after every 80 frames
 if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder = createSprite(random(10,370),random(10,30),20,20);
    switch(rand){
      case 1:thunder.addImage(thunImg1);
      break;
      case 2:thunder.addImage(thunImg2);
      break;
      default:break;
    }
 }

 //display the drops
 maxDrops.display();
 maxDrops1.display();
 maxDrops2.display();

 //draw the sprites
 drawSprites();

}   

