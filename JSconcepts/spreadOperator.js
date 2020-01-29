
//function expression as opposed to declaration
// this type of function can be used as an argumemt in
// another function 

let sum = function (x, y, z) {
  return x + y + z;
}

let numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

//alternative where the first argument is the value of 'this' for the function apply is called upon
console.log(sum.apply(null, numbers));
// expected output: 6


let moreNumbers = [4, 5, 6]

let collectedNumbers = [...numbers, ...moreNumbers]

console.log("the collected numbers are now", collectedNumbers)

let numbersCopy = numbers


numbersCopy = numbersCopy.map(number => number * 2)
console.log("the copied numbers are", numbersCopy)


console.log("And the original numbers are now:", numbers)


