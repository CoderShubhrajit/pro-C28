class Stone
{
    constructor(r)
    {
        var options = {
            'restitution': 0.0,
            'density': 0.2,
            'friction': 0.6
        }
        this.r = r;
        this.body = Bodies.circle(100,445,this.r,options);
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        //ellipseMode(RADIUS);
        //ellipse(this.body.position.x,this.body.position.y,30,30);
        pop();
    }
}