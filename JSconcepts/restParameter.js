let add = function (...args) {
  console.log("Rest has put the arguments into an array:", args)
  let result = 0;

  for (let arg of args) { result += arg }

  return result
}

console.log(add(1)) // returns 1
console.log(add(1, 2)) // returns 3
console.log(add(1, 2, 3, 4, 5)) // returns 15

//destructuring (REST parameter)
let myObj2 = { name: "Ross", home: "London", specialSkill: "beatSabre", favFood: "sweet potatoes" }

let { name, home, ...others } = myObj2
console.log("The spread operator creates a new object with the remaining key/values", others)

others.favFood = "sushi"

console.log(others)