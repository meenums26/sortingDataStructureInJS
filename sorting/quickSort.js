// QUICK SORT

// Identify the Pivot element
// Pick first element as pivot
// Pick last element as pivot
// Pick random element as pivot
// pick median element as pivot
// Put everything that's smaller than the pivot into a 'left' array and greater than the pivot into 'right' array
// Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition
// Repeatedly concatenate the left array, pivot and right array till one sorted array remains

// Time complexity worst case O(n^2)
// Time complexity average case O(n log n)
// Space complexity O(n log n)

const arr = [3, 4, 2, 56, 3, 7, 3, 8];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr; // O(1) - Constant time
  }

  let pivot = arr[arr.length - 1]; // O(1) - Constant time
  let left = []; // O(1) - Constant time
  let right = []; // O(1) - Constant time

  for (let i = 0; i < arr.length - 1; i++) { // O(n) - Linear time
    if (arr[i] < pivot) {
      left.push(arr[i]); // O(1) - Constant time
    } else {
      right.push(arr[i]); // O(1) - Constant time
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]; // O(n log n) - Log-linear time
}

console.log(quickSort(arr)); // O(n log n) - Log-linear time
