function makeCar(accelRate, brakeRate) {
  return {
    speed: 0,
    accelRate: accelRate,
    brakeRate: brakeRate,
    accelerate: function() {
      this.speed += this.accelRate;
    },
    brake: function() {
      this.speed -= Math.min(this.speed, this.brakeRate);
    },
  };
}


var sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);


var coupe = makeCar(12, 9);
coupe.accelerate();
console.log(coupe.speed);

var hatchback = makeCar(9, 5);
