var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup
var score,player,ground;
var bgImg;

var survivalTime = 0;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  bgImg = loadImage("forest.jpg");
 
}

function setup(){
  createCanvas(600,200);
  
  obstaclesGroup = new Group();
  FoodGroup = new Group();
  
  ground = createSprite(300,180,800,20);
  //ground.scale = 0.2;
  //ground.addImage(bgImg);
  
  monkey = createSprite(100,150,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  console.log(monkey.depth);
}

function draw(){
  background(255);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survivalTime: "+ survivalTime, 100,50);
  
  if(keyDown("space")&& monkey.y >= 160){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if(ground.x < 0){
     ground.x = ground.width /2;
  }
  
  SpawnBanana();
  SpawnObstacle();
  
  drawSprites();
}

function SpawnBanana(){
  if(frameCount%60===0){
  banana = createSprite(600,100,20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -10;
  }
}

function SpawnObstacle(){
  if(frameCount%60===0){
  obstacle = createSprite(600,160,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -11;
  }
}


