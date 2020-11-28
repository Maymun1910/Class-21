var fixedRect, movingRect;

var go1, go2, go3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = -2
  movingRect = createSprite(400,400,80,30);
  movingRect.velocityX = 2
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  go1 = createSprite(200,50,50,50);
  go2 = createSprite(400,50,50,50);
  go3 = createSprite(500,50,50,50);

  go1.shapeColor = "green";
  go2.shapeColor = "green";
  go3.shapeColor = "green";
}


function draw() {
  background(0,0,0);  
  go1.x = World.mouseX;
  go1.y = World.mouseY;
     
  if(isTouching(go1,go3)){
    go1.shapeColor = "blue";
    go3.shapeColor = "blue";
  }
  else{
    go1.shapeColor = "green";
    go3.shapeColor = "green";
  }
bounceOff(fixedRect,movingRect);

  drawSprites();
  
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
  return false;
}

}

function bounceOff(object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
object1.velocityX *= -1
object2.velocityX *= -1

object1.velocityY *= -1
object2.velocityY *= -1
    }
}