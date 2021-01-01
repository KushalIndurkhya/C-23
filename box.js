class Box{
      constructor(x,y,width,height){

        var options = {
            isStatic: false
        }

        this.Body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.Body);        
      }
display(){
    var pos = this.Body.position;
    var angle = this.Body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle); 
    rectMode(CENTER);
    fill(255);
    rect(0,0,this.width,this.height);
    pop();
} 
}

