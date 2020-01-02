fLR = function (input) {
  let commandsArray = input.split("")
  commandsArray = commandsArray.filter(char => char === 'F' || char === 'L' || char === 'R')
  let compass = [[0, 0, 1], [1, 1, 0], [2, 0, -1], [3, -1, 0]]

  let currentPosition = [0, 0, 0] //x,y,direction

  commandsArray.forEach(command => {
    if (command === "R") {
      compass.push(compass.shift())
      console.log("facing", compass[0][0])
      currentPosition[2] = compass[0][0]
    } else if (command === "L") {
      compass.unshift(compass.pop())
      currentPosition[2] = compass[0][0]
    } else if (command === "F") {
      currentPosition[0] += compass[0][1]
      currentPosition[1] += compass[0][2]
    }
  })

  console.log(currentPosition)


  return numberOfCommands(currentPosition)

};

numberOfCommands = function (currentPosition) {
  let requiredTurns = 0
  let x = currentPosition[0]
  let y = currentPosition[1]
  let direction = currentPosition[2]


  // if (x > 0) { // want to end up facing 3
  //   requiredTurns += direction === 0 ? 1 : Math.abs(direction - 3)
  //   console.log("X>0 turning x:", requiredTurns)
  //   direction = 3
  if (direction === 3 || direction === 1) {
    console.log("DOING X FIRST")
    let xResults = processX(requiredTurns, x, direction)
    direction = xResults.direction
    requiredTurns = xResults.requiredTurns
    let yResults = processY(requiredTurns, y, direction)
    requiredTurns = yResults.requiredTurns
  } else {
    console.log("DOING Y FIRST")
    let yResults = processY(requiredTurns, y, direction)
    direction = yResults.direction
    requiredTurns = yResults.requiredTurns
    let xResults = processX(requiredTurns, x, direction)
    requiredTurns = xResults.requiredTurns
  }

  // } else if (x < 0) { //want to end up facing 1
  //   requiredTurns += Math.abs(direction - 1)
  //   console.log("X<0 turning x:", requiredTurns)
  //   direction = 1
  // }
  // if (y > 0) { // want to end up facing 2
  //   requiredTurns += Math.abs(direction - 2)
  //   console.log("y>0 turning x:", requiredTurns)
  //   direction = 2
  // } else if (y < 0) { //wamt to end up facing 0
  //   requiredTurns += direction === 3 ? 1 : direction
  //   console.log("Y<0 turning x:", requiredTurns)
  //   direction = 0
  // }
  return requiredTurns + Math.abs(x) + Math.abs(y)
  //PROBLEM: if orientation is parallel to a path it is quicker to turn to it first 
}

const processX = (requiredTurns, x, direction) => {
  if (x > 0) { // want to end up facing x... HUH!!
    requiredTurns += direction === 0 ? 1 : Math.abs(direction - 3)
    console.log("X>0 turning x:", requiredTurns)
    direction = 3

  } else if (x < 0) { //want to end up facing 1
    requiredTurns += Math.abs(direction - 1)
    console.log("X<0 turning x:", requiredTurns)
    direction = 1
  }
  return { requiredTurns, direction }
}

processY = (requiredTurns, y, direction) => {
  if (y > 0) { // want to end up facing 2
    requiredTurns += Math.abs(direction - 2)
    console.log("y>0 turning x:", requiredTurns)
    direction = 2
  } else if (y < 0) { //wamt to end up facing 0
    requiredTurns += direction === 3 ? 1 : direction
    console.log("Y<0 turning x:", requiredTurns)
    direction = 0
  }

  return { requiredTurns, direction }
}
console.log("the result is", fLR("FFRF"))