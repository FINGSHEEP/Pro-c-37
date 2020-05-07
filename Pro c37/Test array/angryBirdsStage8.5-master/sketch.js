const Engine = Matter.Engine ; 
      World = Matter.World ;
      Bodies = Matter.Bodies ; 

var brush  ; 
var position ;  

function setup() {

    createCanvas(500,500);

    brush = 200,200,10,10;
    World.frameRate = 60;
    brush.shapeColor = "white";

    
    
}

function draw() {
    background("black");
    brush.x=World.mouseX;
    brush.y =World.mouseY;
    if(mouseDown("leftButton"))
        
    drawSprites();
}




















