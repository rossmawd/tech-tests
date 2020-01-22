// A constructor function is initialized with a number of parameters, which would be assigned as properties of 'this'
// referring to the function itself. The first letter of the identifier would be capitalized by convention.

// Initializing a constructor function
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Initializing a class definition
class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}