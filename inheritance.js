Function.prototype.inherits = function (parent){
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.contructor = this;
};

Function.prototype.inherits2 = function (parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {
  
}

MovingObject.prototype.move = function() {
  console.log(`I moved!`);
};

function Ship () {
  this.pewpew = function() {
    console.log(`pew pew!`);
  };
}
Ship.inherits2(MovingObject);

function Asteroid () {}

Asteroid.inherits2(MovingObject);




