//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dog1Img;
var dog2IMG;

function preload()
{
  dog1Img = loadImage("Dog.png");
  dog2IMG = loadImage("happydog.png");

}

function setup() {
	createCanvas(1200, 800);
  
dog = createSprite(250,250,20,20);
dog.addImage(dog1Img);
dog.scale=0.5;
//happyDog.addImage(dog2IMG);
database=firebase.database();



foodStock=database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);

  dog.addImage(dog2IMG);
}

  drawSprites();
  //add styles here
  //text("foodStock:",100,100);
  textSize(45);
  fill("black");
  text("Note:Press UP_ARROW Key to feed Drago Milk",250,50);


}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  
  
  database.ref('/').update({
    'Food':x
  })
}



