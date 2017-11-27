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

function assertEqual(expected, evaluated, funcName) {
  console.log(funcName, ' should result in: ' + JSON.stringify(expected));
  console.log(eql(evaluated, expected) ? 'passed' : 'FAILED : ' + JSON.stringify(evaluated));
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

Object.prototype.begetObject = function() {
  function F() {}
  F.prototype = this;
  return new F();
};
