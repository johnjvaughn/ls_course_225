//1.
function func() {
  return this;
}

var context = func();

console.log(context); // Window

//2.
var o = {
  func: function() {
    return this;
  }
};

var context = o.func();

console.log(context); // Object {func: function}

//3.
var message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage(); //Hello from the global scope!

var foo = {
  message: "Hello from the function scope!"
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();  //Hello...function...

//4.
var a = 10;
var b = 10;
var c = {
  a: -10,
  b: -10
};
function add() {
  return this.a + b;
}

c.add = add;

console.log(add());  // 20
console.log(c.add()); // 0

//5.
//call and apply

//6.
var foo = {
  a: 1,
  b: 2
};

var bar = {
   a: "abc",
   b: "def",
   add: function() {
     return this.a + this.b;
   }
};

console.log(bar.add.call(foo)); // 3

//7.
var fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: "A Collection of Fruit"
}


function outputList() {
  console.log(this.title + ':');

  var args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

outputList.apply(fruitsObj, fruitsObj.list);

//8.
