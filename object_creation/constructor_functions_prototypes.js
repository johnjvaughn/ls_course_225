//1.
var a = 1;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

var foo = new Foo(); // 2

foo.bar();  // 2
Foo(); // 2

var obj = {};
Foo.call(obj); // 2
obj.bar();     // 2

console.log(this.a); // 2

//2.
var RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  circumference: function() {
    return 2 * (this.width + this.height);
  }
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);  //RECTANGLE.area();
  this.circumference = RECTANGLE.circumference.call(this);  //RECTANGLE.circumference();
}

var rect1 = new Rectangle(2, 3);
console.log(rect1.area);          // NaN (this.width and this.height in RECTANGLE were undefined until fixed)
console.log(rect1.circumference); // NaN

//3.
function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
}

var a = new Circle(3);
var b = new Circle(4);

console.log(a.area().toFixed(2)); // 28.27
console.log(b.area().toFixed(2)); // 50.27

//4.
function Ninja(){
  this.swung = true;
}

var ninja = new Ninja();

Ninja.prototype.swingSword = function(){
  return this.swung;
}

console.log(ninja.swingSword()); // true

//5.
function Ninja5(){
  this.swung = true;
}

var ninja5 = new Ninja5();

Ninja5.prototype = {
  swingSword: function() {
    return this.swung;
  }
}

//console.log(ninja5.swingSword());

//6.
function Ninja6(){
  this.swung = false;
}

var ninjaA = new Ninja6();
var ninjaB = new Ninja6();

// Add a swing method to the Ninja prototype which
// returns itself and modifies swung
Ninja6.prototype.swing = function() {
  this.swung = true;
  return this;
};

console.log(ninjaA.swing().swung)      // this needs to be true
console.log(ninjaB.swing().swung)      // this needs to be true

//7.
var ninja7A = (function() {
  function Ninja7(){};
  return new Ninja7();
})();

// create a ninjaB object
var ninja7B = Object.create(ninja7A);

console.log(ninja7B.constructor === ninja7A.constructor)    // this should be true