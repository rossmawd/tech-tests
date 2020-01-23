console.log("Null is of type", typeof (null))
console.log("Undefined is of type", typeof (undefined))

let x = null
let y
let n = null
let u

console.log("Are null things equal?:", x === n)
console.log("Are undefined things equal?:", y === u)
console.log("Is null == undefined?:", x == y)
console.log("Is null === undefined?:", x === y)

if (!u && !n) {
  console.log("They're Falsy!")
}

