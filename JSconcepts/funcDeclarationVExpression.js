//difference btwn function declaration and function expression

//DECLARATIONS are hoisted!!
console.log(funcD())
// console.log(funcE())

function funcD() {
  console.log("function declaration")
}
//anonymous func saved into a variable: Expression
let funcE = function () {
  console.log('function expression')
}


//ALSO, you can also pass function expressions to other functions