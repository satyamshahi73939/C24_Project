class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.15,
          'friction':200.5,
          'density':13.5
      }
      this.body = Bodies.circle(x, y, 20,options);
      this.radius = 20;
      World.add(world, this.body);
    }
    display()   {
      var pos =this.body.position;
      
      ellipseMode(RADIUS);
      fill("red");
      ellipse(pos.x,pos.y, this.radius);
      
    }
  };