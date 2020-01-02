
//finds the second highest digit in a string of digits
//using var instead of let as per tech test requirement

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


console.log(secondHighestDigit("32247256345"))