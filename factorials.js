//NB! Using var as oer the tech test requirement

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


secondHighestDigit = function (input) {
  if (typeof input !== "string") { return input }
  var numbersArray = []
  numbersArray = input.match(/\d+/g)
  if (!numbersArray || numbersArray[0].length === 1) { return -1 }
  numbersArray = numbersArray[0].split("")
  numbersArray = numbersArray.sort().reverse()
  console.log("the numbers array", numbersArray)
  return parseInt(numbersArray[1])
};
