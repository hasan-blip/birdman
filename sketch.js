 var PLAY=1
  var END=0
  var gameState=PLAY
  var bird,birdImage
  var bgImage
  var asteroid,asteroidimg
  var border
  var border2
function preload(){
 birdImage=loadImage("de.png")
  bgImage=loadImage("c.jpg")
  asteroidimg=loadImage("y.png")
}
function setup() {
 createCanvas(700, 400);
  
  bird=createSprite(80,180,70,60)
  bird.scale=0.3
  bird.addImage(birdImage)
  border=createSprite(350,420,700,5)
  border2=createSprite(350,-10,700,5)
  rock=new Group();
}
function draw() {
  
  background(bgImage);
  if(gameState===PLAY){
 // background.velocityX=9
  bird.velocityY=9
  if(keyDown("a")){
    bird.velocityY=-9
   
    
  }
    
    bird.velocityY=bird.velocityY+0.8;
 // bird.collide(border)
  //  bird.collide(border2)
 // bird.collide(edges)
  asteroids()
  drawSprites();

  
  
  
  } 
  if(gameState===END){
    if(rock.isTouchingEach(bird)){
  }
  } 
}
 
     

function asteroids(){
  if(World.frameCount%40===0){
     
     asteroid=createSprite(680,random(1,380))
    asteroid.addImage(asteroidimg)
    asteroid.velocityX=-6
    asteroid.scale=0.2
    rock.add(asteroid)
     }
}

