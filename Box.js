class Box{
    //constructor - intialize the objects
    constructor(x,y,w,h){
        var options = {
            restitution : 1.0
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world , this.body);
    }

    display(){
        var pos = this.body.position
        rectMode(CENTER);
        fill("blue")
        push()
        translate(pos.x , pos.y);
        rotate(this.body.angle *10);
        rect(0 ,0 ,this.w, this.h);
        pop()
    }


}