function quickSort(arr, left, right) {
  var len = arr.length,
    pivot,
    partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot],
    partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let toSort = []
let x = 0
do {
  toSort.push(Math.ceil(Math.random() * 100))
  x++
} while (x < 10)

console.time('quickSort')

console.log(quickSort(toSort, 0, toSort.length - 1));

console.timeEnd('quickSort')

// console.log(toSort.slice(0, 3), toSort.slice(3))
