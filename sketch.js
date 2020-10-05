var police_img,garden_img,house_img,dimond_img,laser_img,thief_img,dog_img1,dog_img2,dog_img3,cam_img
var police,house,dimond,laser,thief,dog1,dog2,dog3,garden,cam,ground,scene
function preload () {
 
  house_img=loadImage("images/HOUSE.jpg")
  dimond_img=loadImage("images/DIMOND.jpg")
  dog_img1=loadImage("images/dod1.jpg")
  dog_img2=loadImage("images/dod2.jpg")
  dog_img3=loadImage("images/dog3.jpg")
  thief_img=loadImage("images/THIEF.jpg")
  garden_img=loadImage("images/garden landscape.jpg")
  cam_img=loadImage("images/security camera.png")
  police_img=loadImage("images/police.png")
  laser_img=loadImage("images/LASER 1.png")

}
var scene = createSprite(0, 0,400,400);
scene.addImage(garden_img)
scene.scale=1.4
scene.velocityX=-2 
scene.x=scene.width/2
function setup() {
  createCanvas(1600,800);

  ground = createSprite (950,300,1800,10);
  ground.addImage(garden_img)
  ground.scale=1.4
 // ground.velocityX=-20
  //ground.velocityY=-2


  dimond = createSprite (450,4530,10,10);
  dimond.addImage(dimond_img)
  dimond.scale=0.07

 

  thief = createSprite (10,100,10,10);
  thief.addImage(thief_img)
  thief.scale=0.09

  dog1 = createSprite (220,230,10,10);
  dog1.addImage(dog_img1)
  dog1.scale=0.09
  dog1.velocityX=40
  dog1.velocityY=0

  
  dog2 = createSprite (300,300,10,10);
  dog2.addImage(dog_img2)
  dog2.scale=0.09
  dog2.velocityX=40
  dog2.velocityY=0
  
  laser = createSprite (200,200,100,10);
  laser.shapeColor=("red")
  laser.velocityX=10
  laser.velocityY=0

  laser2 = createSprite (400,400,100,10);
  laser2.shapeColor=("red")
  laser2.velocityX=10
  laser2.velocityY=0


 /* house = createSprite (610,450,10,10);
  house.addImage(house_img)
  house.scale=0.5*/

}

function draw() {
  background(255);

  
  edges=createEdgeSprites()
  dog2.bounceOff(edges[1])
  dog2.bounceOff(edges[0])
  dog1.bounceOff(edges[1])
  dog1.bounceOff(edges[0])
  thief.bounceOff(edges[0])
  thief.bounceOff(edges[1])
  thief.bounceOff(edges[2])
  thief.bounceOff(edges[3])
  laser.bounceOff(edges[1])
  laser.bounceOff(edges[0])
  laser2.bounceOff(edges[1])
  laser2.bounceOff(edges[0])

  if(scene.x<0){
    scene.x=scene.width/2;
  }

  if (keyDown(DOWN_ARROW) ) {
    thief.velocityX=0
    thief.velocityY=5
  }
  
  if (keyDown(UP_ARROW) ) {
    thief.velocityX=0
    thief.velocityY=-5
  }

  if (keyDown(LEFT_ARROW) ) {
    thief.velocityX=-5
    thief.velocityY=0
  }

  if (keyDown(RIGHT_ARROW) ) {
    thief.velocityX=5
    thief.velocityY=0
  }

/*if (condition) {
  
}*/


 imageMode(CENTER)
 
  drawSprites();
}









