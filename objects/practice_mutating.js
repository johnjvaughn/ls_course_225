var message = "Hello from the global scope!";

function func(message) {
  message = "Hello from the function scope!";
  console.log(message);
}

func();
console.log(message);


var myObj = { message: "Greetings from the global scope!" };

function func2(obj) {
  obj.message = "Greetings from the function scope!";
  console.log(obj.message);
}

func2(myObj);

console.log(myObj.message);


var a = 10;
var obj = {
  a: a
}

var newObj = obj;
newObj.a += 10;

console.log(obj.a === a);
console.log(newObj === obj);