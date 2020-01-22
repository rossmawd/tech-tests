let test = () => {
  if (true) {
    let y
    console.log("this variable has function scope:", x)
    console.log("this variable has block scope:", y)

    var x = 2
    y = 1
  }

}
test()


console.log(1 == '1')