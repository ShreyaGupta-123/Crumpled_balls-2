class Ground{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }

    display(){
        push();
        var position=this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(position.x,position.y,this.width,this.height);
        pop();
    }
}


