class Snake {
    constructor(){
     this.snakeXPosition = [];   
     this.snakeYPosition=[];
     this.xdir = 0;               
     this.ydir = 0;               
     this.tailCount = 1;          
     this.x =20;                 
     this.y = 20;    
    // this.score =0
                  
    }
  
    update(){    
      if(!this.gameOver()){   
        this.x += this.xdir;  
        this.y += this.ydir;  
        if(this.snakeXPosition.length >= this.tailCount){ 
          this.snakeXPosition.shift();    
          this.snakeYPosition.shift();    
        }
        this.snakeXPosition.push(this.x); 
        this.snakeYPosition.push(this.y); 
    }
    }

    eat(x,y){       
     if(this.x===x && this.y===y){  
    this.tailCount++;
    
    
     return true;  
     }
     else{
     return false; 
     }
    }

    gameOver(){   
      if(this.x > 800 || this.x < 0 || this.y > 400 || this.y < 0){
        background("pink");
        fill("skyblue")
        textSize(90);
        textFont("comic sans ms")
        text("GAME OVER !!! ",100,220);
        return true;
      }
      else return false;
    }

    display(){
     
      
      for(var i= 0;i<this.tailCount;i++){
        var y = this.snakeYPosition[i];
        var x = this.snakeXPosition[i];
        fill("turquoise");
        rect(x,y,20,20);      
      } 
}
}