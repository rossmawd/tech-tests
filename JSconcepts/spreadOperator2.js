
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = ['a', 'b', 'c']
let arr4 = ['f', 'g', 'h']

//using spread with push (or unshift) will add every otoem in the array
//arr1.push(arr2)
arr1.push(...arr2)


mixedArr = [...arr3, 'd', 'e', ...arr4]


console.log(arr1)
console.log(mixedArr)

////////////////////COPYING arrays
let subArr0 = [1, 2]
//let subArr1 = [1, 2, 3]
let subArr1 = [...subArr0, 3]
let subArr2 = [4, 5, 6]
let originalArr = [...subArr1, ...subArr2]
//let copyArr = originalArr  // this will only copy the refernces
let copyArr = [...originalArr]

copyArr[1] = 'x'

//Remember: objects within the array are still by reference, so not everything gets "copied", per se.
console.log(originalArr, copyArr)

//MATH operations
let numbers = [33, 2, 23, 198, 3]

console.log(Math.min(...numbers))


//destructuring
