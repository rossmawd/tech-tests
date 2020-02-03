
//function expression as opposed to declaration
// this type of function can be used as an argumemt in
// another function 

let sum = function (x, y, z) {
  return x + y + z;
}

let numbers = [1, 2, 3];
console.log(sum(...numbers));
// output: 6

//alternative where the first argument is the value of 'this' for the function apply is called upon
console.log(sum.apply(null, numbers));
// expected output: 6

//using it to spead arrays into each other
let moreNumbers = [6, 7, 8]

let collectedNumbers = [...numbers, 4, 5, ...moreNumbers]

console.log("the collected numbers are now", collectedNumbers)


//using it with strings?

let myString = "backwardsTheFirstEightCharactersWillBe"

let print = function (a, b, c, d, e, f, g, h) {
  console.log("Characters that were spread into the parameters: ",
    h + g + f + e + d + c + b + a)
}

print(...myString) //the string is 'spread' into the print functions parameters


//using it with JS objects
let myObj = { name: 'Vegeta', specialSkill: 'BeatSabre', powerLevel: 9001 }

let pointerToObj = myObj

pointerToObj.name = 'Brian'

console.log("Accidentally altered object:", myObj)

copyOfObj = { ...myObj }
copyOfObj.powerLevel = 8999
console.log("Unaffected Original", myObj)
console.log("Copy:", copyOfObj)

//what if the object has variables in it? Only one layer deep?


// is it irrritating that my open and close brackets both appear at the same time and
// the cursor moves in between them? I HAVE to reach for the down arrow to move to the next line

