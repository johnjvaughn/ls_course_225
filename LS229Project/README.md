## todoApp.js
### John Vaughn
#### Assumptions

1. For todo objects, the data shown in the problem shows the year and month in String format.
```js
var todoData = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};
```
I assumed that although the program needed to be able to initialize the TodoList with data of this form, there
was no problem with internally storing the month and year as numbers after converting them from strings.


2. I implemented the `isWithinMonthYear` method for Todo objects, but don't actually call it anywhere. The todoList uses a more general `searchFor` method that can look for any subset of object data and search, and return copies of the matching todo objects.  This includes looking for a particular month and year, and that is how `todoManager.listAllDate` and `todoManager.listCompletedDate` find the appropriate Todo objects to return.


3. I assumed the `TodoList.update` method should not overwrite properties that don't exist in the given todoData. For instance, if a todo item is
```js
{
  id: 1,
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
  completed: false,
}
```
and 
```js
todoManager.todoList.update(1, {description: 'Just a small amount'});
```
is invoked, only the property `description` is overwritten, and all other properties are left unchanged.


4. It was not clear if there should be just one todoManager object or the possibility of many.  I left it at just one (and hence the lower case `todoManager` rather than `TodoManager` for a constructor). If multiple lists are needed, two possible directions are to make a constructor and create many new TodoManager objects, each with their own single todoList, or just stay at one todoManager object that can administer many todoLists (it could have an array of todoLists and use an extra parameter with its methods to determine which list).


5. Default year/month: whenever a year (or month) is missing from the todoData, it will simply use the current year (or month) when initializing a new Todo. When a month is given with no year, it may be appropriate to set the year to *next* year if the given month is before the current month. I initially wrote a method to do this though the instructions did not say to do that; however they *did* say not to add any more methods to the Todo class, so I left it out.

