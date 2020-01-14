const insertionSort = arr => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let el = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > el; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = el;
  }
  return arr;
};

let toSort = []
let x = 0
do {
  toSort.push(Math.ceil(Math.random() * 100))
  x++
} while (x < 10)

console.time('insertionSort')

console.log(insertionSort(toSort));

console.timeEnd('insertionSort')