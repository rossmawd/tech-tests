factorial = function (input) {
  if (typeof input !== "number") { return 0 }
  else if (input === 1) {
    return 1
  }
  var total = input
  var i = 1
  do {
    total = total * (input - i)
    i++
  } while (i < (input - 1))
  return total
};





console.log(factorial(3))