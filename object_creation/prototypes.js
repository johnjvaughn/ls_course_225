//1.
var prot = {};
var foo = Object.create(prot);

//2.
p(Object.getPrototypeOf(foo) === prot);

//3.
p(prot.isPrototypeOf(foo));

//4.
p(Object.prototype.isPrototypeOf(foo));