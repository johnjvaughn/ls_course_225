//1.
var foo = {};
var bar = Object.create(foo);

foo.a = 1;
console.log(bar.a); // 1

//2.
bar.a = 2;
console.log(bar.a); // 2

//3.
var boo = {};
boo['myProp'] = 1;

var far = Object.create(boo);

// lots of code

if (!far.hasOwnProperty('myProp')) {
  p(far['myProp']); // 1
}