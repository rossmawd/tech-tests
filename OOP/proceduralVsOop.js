//https://www.youtube.com/watch?v=pTB0EiLXUC8

let baseSalary = 30000;
let overtime = 10
let rate = 20

function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overTime * rate);
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

console.log(employee.getWage())