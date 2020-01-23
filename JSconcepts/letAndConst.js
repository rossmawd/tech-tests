const a
a = 4
//SyntaxError: Missing initializer in const declaration

const b = 5
b = 6
// TypeError: Assignment to constant variable.

const arr = [4, 3]
arr.push(2)
//no error. Only reassignment is forbidden

arr = []
// //TypeError: Assignment to constant variable.

console.log(arr)



