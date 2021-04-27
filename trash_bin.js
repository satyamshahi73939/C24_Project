class Trash_Bin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          'friction':5.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };