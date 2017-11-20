const eql = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

const p = (...value) => {
  console.log(...value);
}

const pa = (arr) => {
  if (Array.isArray(arr)) {
    console.log('---Array---')
    arr.forEach((value) => console.log(value));
    console.log('----end----')
  } else {
    p(arr);
  }
}

function assertEqual(expected, func, args) {
  var funcArgs = Array.prototype.slice.call(arguments, 2)
  var funcResult = func(...funcArgs);

  console.log(func.name, funcArgs, 'should result in: ' + expected);
  console.log(eql(funcResult, expected) ? 'passed' : 'FAILED : ' + JSON.stringify(funcResult));
}
