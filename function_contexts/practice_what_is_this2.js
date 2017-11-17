//1.
var myObject = {
  count: 1,
  myChildObject: {
    myMethod: function() {
      return this.count;
    }
  }
};

console.log(myObject.myChildObject.myMethod()); // undefined (this === myChildObject)

//2.
console.log(myObject.myChildObject.myMethod.call(myObject)); // 1 (this === myObject)

//3.
var person = {
  firstName: "Peter",
  lastName: "Parker",
  fullName: function() {
    console.log(this.firstName + " " + this.lastName +
                " is the Amazing Spiderman!");
  }
};

var whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman(); // logs  "Peter Parker is the Amazing Spiderman!"


