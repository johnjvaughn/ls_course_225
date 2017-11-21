function Vehicle() {
}

Vehicle.prototype = {
  doors: 4,
  wheels: 4,
};

var sedan = new Vehicle();
var coupe = new Vehicle();
coupe.doors = 2;
p(sedan);
p(coupe);

p(sedan.hasOwnProperty('doors'));
p(coupe.hasOwnProperty('doors'));

function Coupe() {
}

Coupe.prototype = new Vehicle();
Coupe.prototype.doors = 2;

function Motorcycle() {
  var o = this;
  if (!(o instanceof Motorcycle)) {
    o = new Motorcycle();
  }
  o.doors = 0;
  o.wheels = 2;
  return o;
}
Motorcycle.prototype = new Vehicle();

var crx = new Coupe();
p(crx instanceof Coupe);
p(crx instanceof Vehicle);

var monster = new Motorcycle();
p(monster instanceof Motorcycle);
p(monster instanceof Vehicle);
p(monster instanceof Sedan);

function Sedan() {
}

Sedan.prototype = Object.create(Vehicle.prototype);

var lesabre = new Sedan();
p(lesabre instanceof Sedan);
p(lesabre instanceof Vehicle);
