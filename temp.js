function solution(A) {
  let i = 1
  let included = true
  let smallest
  while (((i < 100000) && included)) {
    included = A.includes(i)
    //console.log(A.includes(i))
    smallest = !included ? i : null
    i++

  }
  return smallest
}



console.log(solution([1, 3, 4, 5, 6]))