var TodoList = function(todosData) {
  if (!(this instanceof TodoList)) {
    return new TodoList(todosData);
  }

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
      if (todoData.hasOwnProperty('title')) this.title = String(todoData.title);
      this.setDate(todoData.month, todoData.year);
      if (todoData.hasOwnProperty('description')) this.description = String(todoData.description);
      if (todoData.hasOwnProperty('completed')) this.completed = todoData.completed;
      return this;
    },
  };

  var todos = [];

  todosData.forEach(function (todoData, index) {
    todo = Object.create(Todo).init(todoData, index + 1);
    todos.push(todo);
  });

  this.indexOfId = function(todoId) {
    for (var i = 0; i < todos.length; i += 1) {
      if (todos[i].id === todoId) return(i);
    }
  };

  this.nextIdNum = function() {
    if (todos.length > 0) {
      return todos[todos.length - 1].id + 1;
    }
    return 1;
  };

  this.add = function(todoData) {
    var todo = Object.create(Todo).init(todoData, this.nextIdNum());

    todos.push(todo);
    return todo.id;
  };

  this.delete = function(todoId) {
    var todoIndex = this.indexOfId(todoId);

    return (todoIndex === undefined) ? undefined : todos.splice(todoIndex, 1);
  };

  this.update = function(todoId, todoData) {
    var index = this.indexOfId(todoId);

    if (index === undefined) return;
    todos[index].init(todoData);
    return todos[index];
  };

  this.complete = function(todoId) {
    return this.update(todoId, { completed: true });
  }

  this.search = function(searchObj) {
    return todos.filter(function (todo) {
      return Object.keys(searchObj).every(function (prop) {
        return searchObj[prop] === todo[prop];
      });
    });
  }
}

var todoManager = {
  todoList: {},

  all: function() {
    return this.todoList.search({});
  },

  completed: function() {
    return this.todoList.search({ 'completed': true });
  },

  allInDate: function(month, year) {
    return this.todoList.search({
      'month': +month,
      'year': +year,
    });
  },

  completedInDate: function(month, year) {
    return this.todoList.search({
      'completed': true,
      'month': +month,
      'year': +year,
    });
  },

  init: function(todoSet) {
    this.todoList = new TodoList(todoSet);
    return this;
  },
};


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

var todoData5 = {
  title: 'Buy Bread',
  month: '4',
  year: '',
  description: 'Whole wheat sandwich bread',
}

var todoData6 = {
  title: 'Buy Veggies',
  //month intentially left out
  year: 2016, //intentionally entered as number
  description: ['Gotta have more ', 'vegetables'], //intentionally entered as array
}

var todoSet = [todoData1, todoData2, todoData3, todoData4];

todoManager.init(todoSet);
todoManager.todoList.add(todoData5);

pa(todoManager.all());
todoManager.todoList.update(4, {title: 'No! buy more chocolate', year: '2000', completed: true});
pa(todoManager.all());
todoManager.todoList.delete(2);
pa(todoManager.all());
todoManager.todoList.add(todoData6);
pa(todoManager.all());
todoManager.todoList.complete(3);

pa(todoManager.completed());
pa(todoManager.allInDate(1, 2017));
pa(todoManager.completedInDate(1, 2017));
pa(todoManager.completedInDate(11, 2000));

var testSet = [
  {
    id: 1,
    title: 'Buy Milk',
    month: 1,
    year: 2017,
    completed: false,
    description: 'Milk for baby',
  },

  {
    id: 2,
    title: 'Buy Apples',
    month: 11,
    year: 2017,
    completed: false,
    description: 'An apple a day keeps the doctor away',
  },

  {
    id: 3,
    title: 'Buy chocolate',
    month: 1,
    year: 2018,
    completed: true,
    description: 'For the cheat day',
  },

  {
    id: 4,
    title: 'No! buy more chocolate',
    month: 11,
    year: 2000,
    completed: true,
    description: 'For the daily fiber needs',
  },

  {
    id: 5,
    title: 'Buy Bread',
    month: 4,
    year: 2018,
    completed: false,
    description: 'Whole wheat sandwich bread',
  },

  {
    id: 6,
    title: 'Buy Veggies',
    month: 11,
    year: 2016,
    completed: false,
    description: 'Gotta have more vegetables',
  }
];


assertEqual(testSet, todoManager.all);