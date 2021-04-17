var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  background(255);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(23,84);
  bullet=createSprite(50,200,30,9);
  wall=createSprite(1200,200,thickness,300);
  bullet.velocityX=speed;
}

function draw() {
  background("black");  
  bullet.shapeColor=("white")
  wall.shapeColor=("grey")
  if(bullet.isTouching(wall)){
bullet.velocityX=0;
  }
function hasCollided();
  
  drawSprites();
}
function hasCollided(bullet,wall)
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness);
    if (damage>0)
    {
      wall.shapeColor=("green")
    }
    if (damage<0)
    {
      wall.shapeColor=("red");
    }
  }
}