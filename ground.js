class Ground{
    constructor(x,y,width,height){
        var Ground_Physics = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,Ground_Physics);
        World.add(world,this.body);
        this.height = height;
        this.width = width;
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(150)
        rect(pos.x,pos.y,this.width,this.height);
    }
};