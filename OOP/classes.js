const x = function () { }

const y = class { }

Object.getPrototypeOf(x);

//output
// Object.getPrototypeOf(x);
// ƒ () { [native code] }

//Object.getPrototypeOf(y)
// ƒ () { [native code] }

//BOTH function and class return a Prototype
