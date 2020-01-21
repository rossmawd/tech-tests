//Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

longestPalindrome = function (s) {
  let originalString = s
  let reversedString = s.split('').reverse().join("")
  let winningLength = 0
  let currentLength = 2
  let winningPalendrome
  let test = true

  for (let i = 0; i < originalString.length; i++) {


    if (originalString.includes(reversedString.substr(i, currentLength))) {
      currentLength = 1

      do {
        console.log("the currentLength is ", currentLength)
        currentLength++
        let currentPalendrome = reversedString.substr(i, currentLength)
        test = originalString.includes(currentPalendrome)
        if (test) {
          console.log(" the original string includes", reversedString.substr(i, currentLength))
          if (currentLength > winningLength) {
            winningLength = currentPalendrome.length
            winningPalendrome = currentPalendrome
          }

        }
      } while (test && currentLength < (originalString.length - i))

    }
  }
  return { "length": winningLength, "palendrome": winningPalendrome }
}





console.log(longestPalindrome("racecar is racecar backwards"))