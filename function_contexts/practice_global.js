//1.
// When the var keyword is not used to declare a variable, it is defined in terms of the global object,
// usually the window object.

//2.
a = 10;
console.log(window.a === a); //true

//3.
function func() {
  var b = 1;
}
func();
//console.log(b); // ReferenceError: b is not defined

//4.
function func2() {
  c = 1;
}
func2();
console.log(c);   // 1

//5.
var a = 1;
b = 'Hi there';
var c = '-50';

delete a; // => false
delete b; // => true
delete c; // => false

//6.
function func3() {
  console.log("I'm a function!");
}

delete func3; // => false

//7.
window.a = 1;
b = 2;
var c = b;

delete window.a; // => true
delete window.b; // => true
delete window.c; // => false