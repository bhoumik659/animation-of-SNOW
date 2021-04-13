class Snow {
    constructor(x,y,radius){
        var options={
            restitution:1,
        }
        this.radius=radius
        this.image=loadImage("snow4.webp")
        this.body = Matter.Bodies.circle(x,y,radius,options)
        Matter.World.add(world,this.body)
    }

    display(){
       imageMode(CENTER)
       image(this.image,this.body.position.x,this.body.position.y,20,20)
    }
}