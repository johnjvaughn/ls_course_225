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

//4.
var a = 1;
var obj = {
  a: 2,
  func: function() {
    console.log(this.a);
  }
};

obj.func();           // 2
obj.func.call();      // 1
obj.func.call(this);  // 1
obj.func(obj);        // 2

var obj2 = { a: 3 };
obj.func.call(obj2);  // 3

//5.
var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    var self = this;
    function specialDiscount() {
      if (self.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    // return this.price + this.shipping + this.tax - specialDiscount();
    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total()); // NaN

