//https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript

const x = function () { }
const y = class { }

Object.getPrototypeOf(x);

//output
// Object.getPrototypeOf(x);
// ƒ () { [native code] }

//Object.getPrototypeOf(y)
// ƒ () { [native code] }

//BOTH function and class return a Prototype

//With prototypes, any function can become a constructor instance using the new keyword.

// Initialize a constructor from a function
const constructorFromFunction = new x();

console.log(constructorFromFunction);

// Initialize a constructor from a class
const constructorFromClass = new y();

console.log(constructorFromClass);