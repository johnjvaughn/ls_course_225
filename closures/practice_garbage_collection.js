//1.
/*
Yes, JS is a GC language. It allocates and deallocates memory for primitives and objects
automatically and implicitly.
*/

//2.
var myNum = 1;

function foo() {
  var myStr = "A string";
  // what is eligible for GC here?   A: nothing
}

foo();
// what is eligible for GC here?   A: myStr
// more code

//3.
var outerFoo;

function bar() {
  var innerFoo = 0;
  outerFoo = innerFoo;
}

bar();
// can outerFoo's 0 be garbage collected here?  A: no
// more code

//4.
function makeEvenCounter() {
  var index = 0;
  return function() {
    return index += 2;
  }
}

var evenCounter = makeEvenCounter();
// is 0 eligible for GC here?         A: no -- the closure retains a reference to it
// more code

//5.
var bash = "Some val";  //A: only GC'd when script ends