// MERGE SORT
// Divide the array to sub arrays, each containing one element 
// An array with one element is considered as sorted
// Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining.
// That will be the sorted array

// Time complexity = O(n log n)
// Space complexity = O(n log n)
const arr = [3, 4, 2, 56, 3, 7, 3, 8];

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr; // O(1) - Constant time
  }

  const mid = Math.floor(arr.length / 2); // O(1) - Constant time
  const leftArr = arr.slice(0, mid); // O(n) - Linear time
  const rightArr = arr.slice(mid); // O(n) - Linear time

  return merge(mergeSort(leftArr), mergeSort(rightArr)); // O(n log n) - Log-linear time
}

function merge(leftArr, rightArr) {
  const sortedArr = []; // O(1) - Constant time

  while (leftArr.length && rightArr.length) { // O(n) - Linear time
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift()); // O(1) - Constant time
    } else {
      sortedArr.push(rightArr.shift()); // O(1) - Constant time
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr]; // O(n) - Linear time
}

mergeSort(arr); // O(n log n) - Log-linear time
console.log(mergeSort(arr)); // O(1) - Constant time
