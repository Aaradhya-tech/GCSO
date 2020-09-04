var car1,car2,car3;
var wall;

function setup() {
  createCanvas(500,400);

  car1 = createSprite(20, 50, 20, 20);
  car1.shapeColor = "white";
  car2 = createSprite(20, 170, 20, 20);
  car2.shapeColor = "white";
  car3 = createSprite(20, 300, 20, 20);
  car3.shapeColor = "white";

  wall = createSprite(470,200,10,400);
  wall.shapeColor = "white";

  car1.velocityX = 5;
  car2.velocityX = 4;
  car3.velocityX = 2;

}

function draw() {
  background(0);
  
  if(car1.x-wall.x < car1.width/2 + wall.width/2 && wall.x - car1.x < wall.width/2 + car1.width/2 ){
      car1.shapeColor = "red";
      car1.velocityX = 0;
    }
  
  if(car1.y - wall.y < car1.height/2 + wall.height/2 && wall.y - car1.y < car1.height/2 + wall.height/2 ){
      
      car1.velocityY = 0;
    }

 if(car2.x-wall.x < car2.width/2 + wall.width/2 && wall.x - car2.x < wall.width/2 + car2.width/2 ){
      car2.shapeColor = "green";
      car2.velocityX = 0;
         }
       
  if(car2.y - wall.y < car2.height/2 + wall.height/2 && wall.y - car2.y < car2.height/2 + wall.height/2 ){
           
       car2.velocityY = 0;
         }

  if(car3.x-wall.x < car3.width/2 + wall.width/2 && wall.x - car3.x < wall.width/2 + car3.width/2 ){
       car3.shapeColor = "yellow";
       car3.velocityX = 0;
             }
           
   if(car3.y - wall.y < car3.height/2 + wall.height/2 && wall.y - car3.y < car3.height/2 + wall.height/2 ){
               
      car3.velocityY = 0;
             }

 
  drawSprites();
}

// calculation = (deformation = weight*speed*speed*0.5 / )
// var properties = speed,weight,deformation,color
// car1 properties = 60,2260,180,red
// car2 = 50,1522,84,green
// car 3 = 45,3000,134,yellow