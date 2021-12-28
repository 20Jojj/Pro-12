 var path, pathImg;
 var jackson, jackson_run;
 var leftb , rightb

function preload(){
  jackson_run = loadAnimation("Runner-1.png" , "Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 5;
  path.scale =1.2;

  jackson = createSprite(200,180,50,170);
  jackson.addAnimation("running",jackson_run);
  jackson.scale=0.06

  leftb = createSprite(30,200,50,400);
  rightb = createSprite(370,200,50,400);
  leftb.visible = false;
  rightb.visible = false;
}

function draw() {
  background(0);

jackson.x=mouseX;

  if(path.y > 400){
    path.y = height/2
  }



  jackson.collide(leftb);
  jackson.collide(rightb);

  createEdgeSprites();
  drawSprites()
}
