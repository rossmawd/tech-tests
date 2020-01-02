stringReverse = function (input) {
  if (typeof input === "string") {
    var reversedArray = []
    input.split("").map(char => reversedArray.unshift(char))
    return reversedArray.join("")
  } else {
    return input
  }
}

console.log(stringReverse("hello"))