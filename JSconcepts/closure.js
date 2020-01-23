let obj = function () {
  let i = 0

  return {
    "setI": function (k) {
      i = k

    }, getI() {
      i = i * 2
      return i
    }
  }
}

let x = obj()

x.setI(2)
console.log(x)
console.log(x.getI())
