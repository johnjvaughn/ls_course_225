//1.
function subtract(a, b) {
  return a - b;
}
function sub5(a) {
  return subtract(a, 5);
}

p(sub5(10)); //5

//2.
function makeSubN(n) {
  return function(a) {
    return subtract(a, n);
  }
}

var subtr5 = makeSubN(5);
p(subtr5(10));

//3.
function makePartialFunc(func, b) {
  // implement this function...
  return function(a) {
    return func(a, b);
  }
}
function multiply(a, b) {
  return a * b;
}

var multiplyBy5 = makePartialFunc(multiply, 5);
p(multiplyBy5(100)); // 500

//4. 
//Brought to you by JS closures

//5.
var subjects = {
  "English": ["Bob", "Tyrone", "Lizzy"],
  "Math": ["Fatima", "Gary", "Susan"],
  "Biology": ["Jack", "Sarah", "Tanya"]
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}
function makeMathRollCall() {
  return function(students) {
    return rollCall('Math', students);
  }
}

var mathRollCall = makeMathRollCall();
mathRollCall(subjects["Math"]);
// Math:
// Fatima
// Gary
// Susan