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

function factorial2(n) {  //using recursive call
  return (n !== 1) ? n * factorial(n - 1) : 1;
}



console.log(factorial(3))