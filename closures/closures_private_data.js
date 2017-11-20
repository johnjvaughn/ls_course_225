function makeCounterLogger(start) {
  return function(end) {
    var increment = (end >= start) ? 1 : -1;
    var i = start;

    while (true) {
      console.log(i);
      if (i === end) break;
      i += increment;
    }
  };
}

var countlog = makeCounterLogger(5);
countlog(8);
countlog(2);


function makeList() {
  var list = [];

  return function(todo) {
    if (todo === undefined) {
      if (list.length === 0) {
        console.log('The list is empty.');
      } else {
        list.forEach((item) => console.log(item));
      }
    } else if (list.includes(todo)) {
      list.splice(list.indexOf(todo), 1);
      console.log(todo + ' removed!');
    } else {
      list.push(todo);
      console.log(todo + ' added!');
    }
  };
}

var list = makeList();
list();
list("make breakfast");
list("read book");
list();
list('make breakfast');
list();