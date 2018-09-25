function MovingObject(pos, vel, radius, color) {
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
  
}

MovingObject.prototype.draw = function (ctx) {
   ctx.fillStyle = this.color;
   ctx.fill();
};

module.exports = MovingObject;
