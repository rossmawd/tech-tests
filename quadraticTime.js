// public static void printAllPossibleOrderedPairs(int[] items) {
//   for (int firstItem : items) {
//       for (int secondItem : items) {
//           System.out.println(firstItem + ", " + secondItem);
//       }
//   }
// }

let arr1 = [1, 2, 3, 4, 5]
let x = 0

arr1 = arr1.map((num) => {
  let new_num = arr1.map((inner_num) => inner_num * num)
  return new_num
})

console.log(arr1)