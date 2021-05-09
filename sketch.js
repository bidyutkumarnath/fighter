

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, mis1Ige,backgroundImage;
var mis1Image;
var misImage;     

function preload(){
  
  backgroundImage = loadImage("background0.jpg");
  
  //arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("fighter.png");
  misImage = loadImage("mis.png");
  mis1Image = loadImage("mis1.png")
 // green_balloonImage = loadImage("green_balloon0.png");
 // pink_balloonImage = loadImage("pink_balloon0.png");
 // blue_balloonImage = loadImage("blue_balloon0.png");
  
  
}



function setup() {
  createCanvas(600, 800);
  
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 1.9
  
  // creating bow to shoot arrow
  bow = createSprite(300,680);
  bow.addImage(bowImage); 
  bow.scale = 0.2
  
  redB= new Group()
  pinkB= new Group()
  blueB= new Group()
  greenB= new Group()
  arrowGroup= new Group()
  
   score = 0  
 
  
}

function draw() {

  // moving ground
    background.velocityY = -3 

    if (background.y < 0){
      background.y = background.width/2;
    }
  
  //moving bow
  bow.x = World.mouseX
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 20 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

if(arrowGroup.isTouching(redB)){
  redB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1
  }
  
  if(arrowGroup.isTouching(greenB)){
  greenB.destroyEach()
  arrowGroup.destroyEach()
  score=score+2
  }
  
  if(arrowGroup.isTouching(blueB)){
  blueB.destroyEach()
  arrowGroup.destroyEach()
  score=score+3
  }
  
  if(arrowGroup.isTouching(pinkB)){
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+4
  }
  
  
  
  drawSprites();
    text("Score: "+ score, 500,100);

    
}


function redBalloon() {
  var red = createSprite(Math.round(random(30,570),0), 30, 30);
  red.addImage(mis1Image);
  red.velocityY = 3;
  red.lifetime = 150;
  red.scale = 0.07;
  redB.add(red);
  return red;
  
}

function blueBalloon() {
  var blue = createSprite(Math.round(random(30,570),0), 30, 30);
  blue.addImage(mis1Image);
  blue.velocityY = 3;
  blue.lifetime = 150;
  blue.scale = 0.07;
  blueB.add(blue)
  return blue;
}

function greenBalloon() {
  var green = createSprite(Math.round(random(30,570),0), 30, 30);
  green.addImage(mis1Image)
  green.velocityY = 3;
  green.lifetime = 150;
  green.scale = 0.07;
  greenB.add(green)
  return green;   
}

function pinkBalloon() {
  var pink = createSprite(Math.round(random(30,570),0), 30, 30);
  pink.addImage(mis1Image);
  pink.velocityY = 3;
  pink.lifetime = 150;
  pink.scale = 0.07;
 pinkB.add(pink)
  return pink;
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(300, 690,40);
  arrow.addImage(misImage);
  arrow.x=bow.x;
  arrow.velocityX = 0;
  arrow.velocityY = -5;
  arrow.lifetime = 150;
  arrow.scale = 0.07;
  arrowGroup.add(arrow);
  return arrow;
   
}
