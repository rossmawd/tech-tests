//https://www.youtube.com/watch?v=pTB0EiLXUC8

let baseSalary = 30000;
let overtime = 10
let rate = 20

//procedural approach
function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate);
}

let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  //with this OOP implementation, getWage has no parameters
  getWage: function () {
    return this.baseSalary + (this.overtime * this.rate);
  }
}

//-------------------------------------------
const Car = function (color, model, dateManufactured) {
  this.color = color;
  this.model = model;
  this.dateManufactured = dateManufactured;
};
Car.prototype.getColor = function () {
  return this.color;
};
Car.prototype.getModel = function () {
  return this.model;
};
Car.prototype.carDate = function () {
  return `This ${this.model} was manufactured in the year ${this.dateManufactured}`
}
let firstCar = new Car('red', 'Ferrari', '1985');
console.log(firstCar);
console.log(firstCar.carDate()); // à This Ferrari was manufactured in the year 1985.

console.log(employee.getWage())
console.log("the protoype is:", Car.prototype)


//-------------------------------
let protoRabbit = {
  color: 'grey',
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "assassin";
killerRabbit.speak("SKREEEE!");

