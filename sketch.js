
var monkey , monkey_running
var banana ,bananaImage, rock, rockImage
var bananaGroup, rockGroup
var score;


function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")     
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  
  
  
   monkey= createSprite(80,315,20,20);
   monkey.addAnimation("running", monkey_running);
   monkey.scale = 0.1;

   ground = createSprite(400,350,900,10);
   ground.velocityX=-4;
   ground.x = ground.width/2;
   console.log(ground.x);
  
  bananaGroup = createGroup();
  rockGroup = createGroup();
  score=0;
}


function draw() {
background("white");
  
  
  stroke("white");
  textSize(20);
  fill("white")
  text("score: "+ score, 250,50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
   text("survivalTime: "+ survivalTime, 250,50);
  
   
    if (ground.x < 200){
      ground.x = ground.width/2;
    }
  
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
      monkey.velocityY = monkey.velocityY + 0.8;
      monkey.collide(ground);
  
  
  
  spawnfood();
  spawnobstacle();
  
  
  drawSprites();
  
}

function spawnfood(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     
    banana.lifetime = 210;
    
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    bananaGroup.add(banana);
   
  }
  
  
  
  
  
}

function spawnobstacle(){
  if (frameCount % 300 === 0) {
    var rock = createSprite(600,329,40,10);
    rock.addImage(rockImage);
    rock.scale = 0.1;
    rock.velocityX = -3;
    
     
    rock.lifetime = 210;
    
    
    rock.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    rockGroup.add(rock);
   
  }
  
  
  
  
  
}







