//1.
function makeMultipleLister(step) {
  var limit = 100;

  return function() {
    for (var i = step; i < 100; i += step) {
      console.log(i);
    }
  };
}

var lister = makeMultipleLister(11);
lister();

//2.
var runningTotal = 0;
function add(num) {
  runningTotal += num;
  console.log(runningTotal);
}
function subtract(num) {
  return add(-num);
}

add(1); //1
add(42); //43
subtract(39); //4
add(6); //10

//3.
function later(func, arg) {
  return function () {
    return func(arg);
  };
}
var logWarning = later(console.log, 'The system is shutting down!');
logWarning();

//4.
function startup() {
  var status = 'ready';
  return function() {
    console.log('The system is ready.');
  }
}

var ready = startup();
//var systemStatus = // ?
//no way to access the local var 'status' inside the startup() function

