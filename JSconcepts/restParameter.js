let add = function (...args) {
  let result = 0;

  for (let arg of args) result += arg

  return result
}

console.log(add(1)) // returns 1
console.log(add(1, 2)) // returns 3
console.log(add(1, 2, 3, 4, 5)) // returns 15