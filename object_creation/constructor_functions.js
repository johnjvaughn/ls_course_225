//1.
//named starting with a capital letter

//2.
// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }

// var lizzy = Lizard();
//lizzy.scamper(); // nothing, and throw a TypeError because scamper was defined on the global object, not on lizzy

//3.
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

var lizzy = new Lizard();
lizzy.scamper();