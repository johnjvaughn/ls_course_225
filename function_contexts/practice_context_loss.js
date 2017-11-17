//1 - 3.
var turk = {
  firstName: "Christopher",
  lastName: "Turk",
  occupation: "Surgeon",
  getDescription: function() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  },

};

function logReturnVal(func) {
  var returnVal = func(); // called without context, so internal 'this' object refers to global object
  console.log(returnVal);
}
function logReturnValContext(func, context) {
  var returnVal = func.call(context); // called without context, so internal 'this' object refers to global object
  console.log(returnVal);
}

logReturnValContext(turk.getDescription, turk);

var getTurkDescription = turk.getDescription.bind(turk);
logReturnVal(getTurkDescription);

//4 - 6.
var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: "The Elder Scrolls",
  listGames: function() {
    //var self = this;

    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);  //won't output this.seriesTitle properly because of context loss
      //console.log(self.seriesTitle + ' ' + title);  //won't output this.seriesTitle properly because of context loss
    }, this);
  }
}

TESgames.listGames();

//7.
var foo = {
  a: 0,
  incrementA: function() {
    // function increment() {
    //   this.a += 1;
    // }
    //increment();
    //increment.call(this);
    increment = function () {
      this.a += 1;
    }.bind(this);

    increment();
    increment();
    increment();
  }
}

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a); // 3

