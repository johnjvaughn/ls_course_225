function makeList() {
  var theList = [];
  return {
    list: function() {
      if (theList.length > 0) {
        theList.forEach((item) => console.log(item));
      } else {
        console.log("List is empty.");
      }
    },
    add: function(todo) {
      if (!theList.includes(todo)) {
        theList.push(todo);
        console.log(todo + ' added!');
      }
    },
    remove: function(todo) {
      if (theList.includes(todo)) {
        theList.splice(theList.indexOf(todo), 1);
        console.log(todo + ' removed!');
      }
    },
  };
}

var list = makeList();
list.list();
list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();
console.log(list.theList);
