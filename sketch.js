var snake;
var foodX,foodY;
var score=0;
function setup() {
  createCanvas(800,400);
  snake = new Snake();
  foodLocation();
  frameRate(3);
}

function draw() {
  background("teal");  
  
  snake.update();
  fill("black")
text ("score "+score,720,50) 
  if(snake.eat(foodX,foodY)){
  score=score+1
    foodLocation(); 
  }  
  snake.display();
  fill("yellow");
  rect(foodX,foodY,20,20); 
  snake.gameOver();   
}

function keyPressed(){      
  if(keyCode === LEFT_ARROW){
    snake.xdir = -20;
    snake.ydir = 0;
  }
  else if(keyCode === RIGHT_ARROW){
    snake.xdir = 20;
    snake.ydir = 0;
  }
  if(keyCode === UP_ARROW){
    snake.xdir = 0;
    snake.ydir = -20;
  }
  if(keyCode === DOWN_ARROW){
    snake.xdir = 0;
    snake.ydir = 20;
  }
}

function foodLocation (){       
  foodX = floor(random(0,40))*20; 
  foodY = floor(random(0,20))*20;
}