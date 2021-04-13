const Engine=Matter.Engine;
var backgroundImg;
var snowman;
var boy;
var snow=[]
function setup() {
  createCanvas(800,400);
  snowman = createSprite(400, 200, 50, 50);
  boy = createSprite(300,200,50,50);
  boy.addImage(boyImg)
  boy.scale=0.2
  snowman.addImage(snowmanImg)
  snowman.scale=0.1
  engine=Engine.create()
  world=engine.world
}

function preload(){
backgroundImg = loadImage("snow1.jpg")
snowmanImg = loadImage("snowman.png")
boyImg = loadImage("boy.png")
home=loadImage("home.png")
}

function draw() {
  background(backgroundImg);
  Engine.update(engine)  
  image(home,500,180,200,200)
  if(frameCount%2 === 0){
    snow.push(new Snow(random(0,800),10,10))
  }
  for(var i=0;i<snow.length;i++){
    snow[i].display()
  }
  drawSprites();
}