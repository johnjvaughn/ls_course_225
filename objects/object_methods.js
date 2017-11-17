var me = {
  firstName: 'John',
  lastName: 'Vaughn',
};

var me2 = {};
me.firstName = 'John';
me.lastName = 'Vaughn';

// function fullName(person) {
//   console.log(person.firstName + ' ' + person.lastName);
// }

// fullName(me);

var friend = {
  firstName: 'John',
  lastName: 'Smith',
};

// fullName(friend);

var mother = {
  firstName: 'Amber',
  lastName: 'Doe'
};

var father = {
  firstName: 'Shane',
  lastName: 'Doe'
};

// var people = [];
// people.push(me);
// people.push(friend);
// people.push(mother);
// people.push(father);

// function rollCall(collection) {
//   collection.forEach(fullName);
// }

// rollCall(people);

var people2 = {
  lastIndexUsed: -1;
  collection: [],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  rollCall: function() {
    this.collection.forEach(this.fullName);
  },
  add: function(person) {
    if (this.isInvalidPerson(person)) return;
    lastIndexUsed += 1;
    person.index = lastIndexUsed;
    this.collection.push(person);
  },
  getIndex: function(person) {
    var index = -1;
    this.collection.forEach(function (comparator, i) {
      if (comparator.index === person.index) 
      // if (comparator.firstName === person.firstName &&
      //     comparator.lastName === person.lastName) {
        index = i;
      }
    });

    return index;
  },
  remove: function(person) {
    if (this.isInvalidPerson(person)) return;
    var index = this.getIndex(person);
    if (index === -1) return;
    this.collection.splice(index, 1);
  },
  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },
  get: function(person) {
    if (this.isInvalidPerson(person)) return;
    return this.collection[this.getIndex(person)];
  },
  update: function(person) {
    if (this.isInvalidPerson(person)) return;
    var existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

people2.add(me);
people2.add(friend);
people2.add(mother);
people2.add(father);
people2.rollCall();
people2.remove({firstName: 'Shane', lastName: 'Do'});
people2.remove({firstName: 'Shane', lastName: 'Doe'});
people2.rollCall();
