
//original is in TYPESCRPT

function solution(S) {
  // write your code in Java SE 8
  let sentences = S.split(/[\?,\.,\!]/)
  let maxWords = 0
  sentences.map(sentence => {
    let words = sentence.split(' ')
    words = words.filter(word => word !== "")
    words.length > maxWords ? maxWords = words.length : null
  })

  return maxWords
}



console.log(solution("this is my test string. How will it work? I must split on three different chars!"))