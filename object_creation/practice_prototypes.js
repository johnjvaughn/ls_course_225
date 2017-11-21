//1.
function getDefiningObject(object, propKey) {
  var obj = object;

  while (obj) {
    if (obj.hasOwnProperty(propKey)) return obj;
    obj = Object.getPrototypeOf(obj);
  }

  return null;
}

var foo = {
  a: 1,
  b: 2
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // true
console.log(getDefiningObject(qux, 'e'));             // null

//2.
function shallowCopy(object) {
  var copy = Object.create(Object.getPrototypeOf(object));

  Object.getOwnPropertyNames(object).forEach(function (prop) {
    copy[prop] = object[prop];
  });

  return copy;
}

var foo2 = {
  a: 1,
  b: 2
};

var bar2 = Object.create(foo2);
bar2.c = 3;
bar2.say = function() {
  console.log("c is " + this.c);
}

var baz2 = shallowCopy(bar2);
console.log(baz2.a);       // 1
baz2.say();                // c is 3

//3.
function extend(destination) {
  var objects = Array.prototype.slice.call(arguments, 1);

  objects.forEach(function (obj) {
    Object.getOwnPropertyNames(obj).forEach(function (prop) {
      destination[prop] = obj[prop];
    });
  });

  return destination;
}

var foo3 = {
  a: 0,
  b: {
    x: 1,
    y: 2
  }
};

var joe = {
  name: 'Joe'
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },
  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  }
};

var object3 = extend({}, foo3, joe, funcs);

console.log(object3.b.x);          // 1
object3.sayHello();                // Hello, Joe
