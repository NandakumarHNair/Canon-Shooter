class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

    };
}

class CanonBase {
  constructor(x, y, width, height) {
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }


  display(){
      fill(255);
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
  }
}


class CanonHead {
  constructor(x, y, radius) {

    var canonHead_options = {isStatic : false};
    this.body = Bodies.circle(x, y, radius, canonHead_options);
    this.radius = radius;
    
    World.add(world, this.body);
  }


  display(){
      fill(255);
      var pos = this.body.position;
      rectMode(RADIUS);
      circle(pos.x, pos.y, this.radius);
  }
}

class CanonShooter {
  constructor(x, y, width, height, angle) {
    var canonShooter_options = {isStatic : true};
    this.body = Bodies.rectangle(x, y, width, height, angle, canonShooter_options);
    this.width = width;
    this.height = height;
    Matter .Body.setAngle(this.body, angle);
    
    World.add(world, this.body);
  }


  display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      fill(255);
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
  }
}

