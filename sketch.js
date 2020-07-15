//Create variables here
var database;
var dog,dog_img,foofs,foodleft;
function preload()
{
  dog_img=loadImage("images/dogimg.png");
  dogs_img=loadImage("images/dogimg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
dog=createSprite(200,200,50,50);
dog.addImage("dog1",dog_img);
dog.scale=0.5;
var foodref=database.ref("Food");
foodref.on("value",readStock);


}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here
  if(keyIsDown(UP_ARROW)){
    writeStock(foodleft);
   dog.addImage("dog1",dogs_img)
  }
  textSize(30)
text("Food Left:"+foodleft,170,200);
textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",300,20);
}



function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref("/").update({
    Food:x
  })
}

function readStock(data){
  foodleft=data.val();

}