//1.
// function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }();
//will NOT execute, need () around the function

//2.
(function() {
  console.log("Sometimes, syntax isn't intuitive!")
})();

//3.
var sum = 0;

sum += 10;
sum += 31;

var numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// }

//sum += sum(numbers); // ?
sum += function(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
}(numbers);

p(sum);

//4.
function countdown(start) {
  (function(begin) {
    for (var i = begin; i >= 0; i -= 1) {
      p(i);
    }
  })(start);
  p('Done!');
}
countdown(7);

//5.
(function foo() {
  console.log("Bar");
})();

//foo(); // not visible in global scope

//6.
function countdownRecur(start) {
  (function countdown(begin) {
    p(begin);
    if (begin > 0) countdown(begin - 1);
  })(start);
  p('Done!');
}
countdownRecur(7);