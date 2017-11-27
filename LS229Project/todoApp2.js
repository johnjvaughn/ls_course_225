var Todo = {
  id: 0,
  title: '',
  completed: false,
  month: '',
  year: '',
  description: '',

  isWithinMonthYear: function(month, year) {
    return (this.month === +month && this.year === +year);
  },

  setDate: function(month, year) {
    var today = new Date();
    var curMonth = today.getMonth() + 1;
    var curYear = today.getFullYear();
    year = year || this.year; // if no year or month, keep any already-set values in this
    month = month || this.month;

    if (year) {
      this.year = +year;
      if (month) {
        this.month = +month;
      } else {  // if year is in future and no month given, set month to Jan.
        this.month = (this.year <= curYear) ? curMonth : 1;
      }
    } else  {
      this.year = curYear;
      this.month = (month) ? +month : curMonth;
      // if year not given and month is before current month, set the year to next year
      if (this.month < curMonth) this.year += 1;
    }
  },

  init: function(todoData, id) {
    this.id = id || this.id;
    this.title = todoData.title || this.title;
    this.setDate(todoData.month, todoData.year);
    this.description = todoData.description || this.description;
    return this;
  },
};

var TodoList = function(todosData) {
  var todos = [];
  var nextId = 1;

  todosData.forEach(function (todoData) {
    todo = Object.create(Todo).init(todoData, nextId);
    todos.push(todo);
    nextId += 1;
  });

  this.indexOfId = function(todoID) {
    for (var i = 0; i < todos.length; i += 1) {
      if (todos[i].id === todoID) return(i);
    }
  },

  TodoList.prototype.todoCopyOfId: function(todoID) {
    var index = this.indexOfId(todoID);

    if (index === undefined) return;
    return Object.create(this.todos[index]).init(this.todos[index]);
  },

  nextIdNum: function() {
    if (this.todos.length > 0) {
      return this.todos[this.todos.length - 1].id + 1;
    }
    return 1;
  },

  add: function(todoData) {
    var todo = Object.create(Todo).init(todoData, this.nextIdNum());

    this.todos.push(todo);
    return todo.id;
  },

  delete: function(todoID) {
    var todoIndex = this.indexOfId(todoID);

    return (todoIndex === undefined) ? undefined : this.todos.splice(todoIndex, 1);
  },

  update: function(todoID, todoData) {
    var index = this.indexOfId(todoID);

    if (index === undefined) return;
    this.todos[index].init(todoData);
    return this.todos[index];
  },

  init: function(todosData) {
    todosData.forEach(function (todoData) {
      this.add(todoData);
    }, this);

    return this;
  },
}

// var todoManager = {
//   todoList: {};

//   all: function(todoList) {
//     return todoList.
//   }

//   init: function(todoList) {
//     this.todoList = todoList;
//   },
// };


var todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};

var todoData2 = {
  title: 'Buy Apples',
  month: '',
  year: '2017',
  description: 'An apple a day keeps the doctor away',
};

var todoData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
};

var todoData4 = {
  title: 'Buy Veggies',
  month: '',
  year: '',
  description: 'For the daily fiber needs',
};

var todoSet = [todoData1, todoData2, todoData3];

var tdList = Object.create(TodoList).init(todoSet);
// tdList.add(todoData1);
tdList.add(todoData4);
pa(tdList.todos);
tdList.update(4, {title: 'No! buy more chocolate', year: '2000', completed: true});
pa(tdList.todos);
p(tdList.todos[1].completed);
aNewTodo = tdList.todoCopyOfId(3);
aNewTodo.init({title: "buy dark chocolate", year: "2009"});
p(aNewTodo);
pa(tdList.todos);