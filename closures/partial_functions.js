function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

function greet(greeting, name) {
  greeting = greeting.replace(/^[a-z]/, function(match) {
    return match.toUpperCase();
  });
  p(greeting + ', ' + name + '!');
}

greet("howdy", "Joe"); //Howdy, Joe!
greet("good morning", "Sue"); //Good morning, Sue!

var sayHello = partial(greet, 'hello');
var sayHi = partial(greet, 'hi');

sayHello('Brandon');
sayHi('Sarah');