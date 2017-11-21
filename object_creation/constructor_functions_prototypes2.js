//1.
var shape = {
  type: null,
  getType: function() {
    return this.type;
  },
};

function Triangle(a, b, c) {
  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;
};

Triangle.prototype = shape;

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

Triangle.prototype.constructor = Triangle;

var t = new Triangle(1, 2, 3);
p(t.constructor);                 // Triangle(a, b, c)
p(shape.isPrototypeOf(t));        // true
p(t.getPerimeter());              // 6
p(t.getType());                   // "triangle"

//2.
function User(first, last) {
  if (this instanceof User) {
    this.name = first + ' ' + last;
  } else {
    return new User(first, last);
  }
}

var name = 'Jane Doe';
var user1 = new User('John', 'Doe');
var user2 = User('John', 'Doe');

console.log(name);        // Jane Doe
console.log(user1.name);   // John Doe
console.log(user2.name);   // John Doe

//3.
function createObject(obj) {
  function DummyObject() {}
  DummyObject.prototype = obj;
  return new DummyObject();
}

var foo = {
  a: 1
};

var bar = createObject(foo);
p(foo.isPrototypeOf(bar));         // true

//4.
Object.prototype.begetObject = function() {
  return createObject(this);
}

var foo4 = {
  a: 1,
};

var bar4 = foo4.begetObject();
p(foo4.isPrototypeOf(bar4));         // true

//5.
function neww(constructor, args) {
  var obj = Object.create(constructor.prototype);
  var result = constructor.apply(obj, args);

  obj.constructor = constructor;
  return (result === undefined) ? obj : result;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
}

var john = neww(Person, ['John', 'Doe']);
john.greeting();          // Hello, John Doe
p(john.constructor);         // Person(firstName, lastName) {...}
