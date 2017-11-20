//1.
//Higher-order functions either accept functions as arguments, return a function as a value, or both.

//2.
var numbers = [1, 2, 3, 4];
function checkEven(number) {
  return number % 2 === 0;
}

numbers.filter(checkEven); // (2) [2, 4]
//filter is a higher-order function

//3.
var numbers3 = [1, 2, 3, 4];
function makeCheckEven3() {
  // ... implement this function
  return function (number) {
    return number % 2 === 0;
  };
}

var checkEven3 = makeCheckEven3();

console.log(numbers3.filter(checkEven3)); // (2) [2, 4]

//4.
function execute(func, operand) {
  return func(operand);
}

console.log(execute(function(number) {
  return number * 2;
}, 10)); // 20

console.log(execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy')); // HEY THERE BUDDY

//5.
function makeListTransformer(func) {
  return function(collection) {
    return collection.map(func);
  }
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]
