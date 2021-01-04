class Mango
{
    constructor(x,y,r)
    {
        var options = {
            'isStatic': true,
            'restitution': 0.0,
            'density': 0.7
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display()
    {
        push();
        //ellipseMode(RADIUS);
        imageMode(RADIUS);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
        //rectMode(CENTER);
        //rect(this.body.position.x,this.body.position.y,400,450);
        pop();
    }
}