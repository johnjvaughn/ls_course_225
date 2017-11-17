//1.
function whatIsMyContext() {
  return this;  // => don't know without info on its invocation
}

//2.
function whatIsMyContext2() {
  return this;
}
console.log(whatIsMyContext2()); // global object (Window) 

//3.
function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }
    baz();
  }
  bar();
}
foo(); // global object

//4.
var obj = {
  count: 2,
  method: function() {
    return this.count;  
  }
};
console.log(obj.method()); // 2 (this points to obj)

//5.
function foo5() {
  console.log(this.a5);
}

var a5 = 2;
foo5(); // 2  (this points to global object)

//6.
var a6 = 1;

function bar6() {
  console.log(this.a6);
}

var obj6 = {
  a6: 2,
  foo6: bar6
};

obj6.foo6();  // 2

//7.
foo7 = {
  a7: 1,
  bar7: function() {
    console.log(this.baz7());
  },
  baz7: function() {
    return this;
  }
};

foo7.bar7();  // object foo7
var qux7 = foo7.bar7;
qux7();   // TypeError: this.baz7 is not a function
