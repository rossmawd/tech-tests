
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



let originalObj = {
  name: "Ross", home: "London", specialSkills: { beatSabre: 4, cooking: 2 },
  favFoods: ["sushi", "sweet potatoes"]
}

let copyObj = originalObj
copyObj.name = "Dave"
console.log("Whoops! The original has been changed!: ", originalObj)
let spreadCopy = { ...originalObj }
spreadCopy.home = "Tokyo"
console.log("Dave still lives in London:", originalObj.home)

let spreadCopy2 = { ...originalObj }
// the below WILL change the originalObj! as spread only copies 1 nesting deep
spreadCopy2.specialSkills.beatSabre = 10

console.log("Nested objects aren't copied!", originalObj.specialSkills.beatSabre)

//what about nested arrays?
spreadCopy2.favFoods[0] = "curry"

console.log(originalObj.favFoods)
//output: [ 'curry', 'sweet potatoes' ]
//nested array's aren't safe either!

let { name, home, specialSkills: { ...specialSkills }, favFoods: { ...favFoods } } = originalObj
// specialSkills = { ...specialSkills }
// favFoods = [...favFoods]

specialSkills.cooking = 9001
favFoods[1] = "marmite"

console.log(originalObj.specialSkills.cooking, originalObj.favFoods[1])


