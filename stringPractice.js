let str1 = "   remove the whitespace         !"
let str2 = "I am the house cat"
console.log(str1.trim())
console.log("the index of the is", str2.indexOf("the"))
console.log("the last index of 'the' in str2:", str2.lastIndexOf("the")) //HMM doesn't work?


//neither slice nor substr are destructive
str2.substr(5, 8)
console.log(str2.substr(5, 3)) //beginning, how many
console.log(str2.slice(5, 8))
console.log(str2)

str2.splice(5, 3)
console.log(str2)