//1.
//bind

//2.
var obj = {
  message: "JavaScript"
}

function foo() {
  console.log(this.message);
}

foo.bind(obj);
//logs nothing; hasn't been invoked yet

//3.
var a = 1;
var b = -1;
var obj3 = {
  a: 2,
  b: 3
};

function foo3() {
  return this.a + this.b;
}

var bar3 = foo3.bind(obj3);

console.log(foo3()); // 0
console.log(bar3()); // 5

//4.
var positiveMentality = {
  message: "JavaScript makes sense!"
};

var negativeMentality = {
  message: "JavaScript makes no sense!"
};

function foo4() {
  console.log(this.message);
}

var bar4 = foo4.bind(positiveMentality);

negativeMentality.logMessage = bar4;
negativeMentality.logMessage(); // "JavaScript makes sense!"

//5.
var obj5 = { a: 'Amazebulous!' };
var otherObj5 = { a: "That's not a real word!" };

function foo5() {
  console.log(this.a);
}

var bar5 = foo5.bind(obj5);
bar5.call(otherObj5); // Amazebulous!
