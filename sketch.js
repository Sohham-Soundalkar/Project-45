var bgImage, bg;
var ground, groundImage;
var car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12;
var obstacle1, obstacle2;

function preload(){
  bgImage = loadImage("sky.jpg");
  groundImage = loadImage("ground2.png");
  car1 = loadImage("car1-removebg-preview.png");
  car2 = loadImage("car2-removebg-preview.png");
  car3 = loadImage("car3-removebg-preview.png");
  car4 = loadImage("car4-removebg-preview.png");
  car5 = loadImage("car5-removebg-preview.png");
  car6 = loadImage("car6-removebg-preview.png");
  car7 = loadImage("car7-removebg-preview.png");
  car8 = loadImage("car8-removebg-preview.png");
  car9 = loadImage("car9-removebg-preview.png");
  car10 = loadImage("car10-removebg-preview.png");
  car11 = loadImage("car11-removebg-preview.png");
  car12 = loadImage("car12-removebg-preview.png");
  obstacle1 = loadImage("obstacle1-removebg-preview.png");
  obstacle2 = loadImage("obstacle2-removebg-preview.png");
}
function setup() {
  createCanvas(1500,720);
  bg = createSprite(700,450);
  bg.addImage(bgImage);

  ground = createSprite(1000,700,4000,200);
  ground.addImage(groundImage);
  ground.scale = 3.6;
  ground.velocityX = -7;

  spawnCar();
}

function draw() {
  background("black");
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  drawSprites();

  textSize(50);
  text(mouseX + "," + mouseY, mouseX, mouseY);
}

function spawnCar(){
  var car = createSprite(200,550,50,50);
  var rand = Math.round(random(1,12));
  switch(rand){
    case 1: car.addImage(car1);
    car.scale = 0.8;
    break;
    case 2: car.addImage(car2);
    car.scale = 0.75;
    break;
    case 3: car.addImage(car3);
    car.scale = 0.6;
    break;
    case 4: car.addImage(car4);
    car.scale = 0.8;
    break;
    case 5: car.addImage(car5);
    car.scale = 0.75;
    break;
    case 6: car.addImage(car6);
    car.scale = 0.4;
    break;
    case 7: car.addImage(car7);
    car.scale = 0.6;
    break;
    case 8: car.addImage(car8);
    car.scale = 0.9;
    break;
    case 9: car.addImage(car9);
    car.scale = 0.7;
    break;
    case 10: car.addImage(car10);
    car.scale = 0.7;
    break;
    case 11: car.addImage(car11);
    car.scale = 0.35;
    break;
    case 12: car.addImage(car12);
    car.scale = 1;
    break;
    default: break;
  }
}