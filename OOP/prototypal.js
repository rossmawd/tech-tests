//constructor function
let car = function (model) {
  this.model = model
}

//every object has another object assigned to it called prototype
car.prototype.getModel = function () {
  return this.model
}

let ferrari = new car('ferrari')
console.log(ferrari.getModel())

