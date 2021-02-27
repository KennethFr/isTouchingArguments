var box1;
var box2;
var box3;
var box4;

function setup() {
  createCanvas(800,400);
  box1=createSprite(400, 200, 70, 60);
  box2=createSprite(200, 200, 50, 93);
  box1.shapeColor = "red";
  box2.shapeColor = "red";
  box1.debug=true;
  box2.debug=true;
  box3=createSprite(300, 300, 70, 60);
  box4=createSprite(100, 400, 50, 93);
  box3.shapeColor = "red";
  box4.shapeColor = "red";
  box3.debug=true;
  box4.debug=true;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  box1.x=mouseX;
  box1.y=mouseY;
if(isTouching(box1,box4)){
  box1.shapeColor= "green";
  box4.shapeColor= "green";
}else{
  box1.shapeColor= "red";
  box4.shapeColor= "red";
}

}


function isTouching(obj1,obj2){
  if (obj1.x-obj2.x<obj1.width/2+obj2.width/2&&
    obj2.x-obj1.x<obj1.width/2+obj1.width/2&&
    obj1.y-obj2.y<obj2.height/2+obj1.height/2&&
    obj2.y-obj1.y<obj2.height/2+obj1.height/2){
      return true;
    } else {
      return false;
    }
}