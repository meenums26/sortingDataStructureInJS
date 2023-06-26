//INSERTION SORT
// Virtually splits the array into sorted and unsorted part
// Assume that first element is already sorted and the remaining elements are unsorted
// Select an unsorted element and compare it with all elements in sorted part
// If the elements in the sorted part is smaller than the selected element,proceed to the next element in the unsorted part
// Else shift largest elements in the sorted part towards the right
// Insert the selected element in the right index
// Repeat till all the unsorted elements are placed in the right order

// Time complexity O(n^2)
// Space complexity O(1)

const arr = [3, 4, 2, 56, 3, 7, 3, 8];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) { // O(n) - Linear time
    let elemToInsert = arr[i]; // O(1) - Constant time
    j = i - 1; // O(1) - Constant time

    while (j >= 0 && arr[j] > elemToInsert) { // O(n) - Linear time
      arr[j + 1] = arr[j]; // O(1) - Constant time
      j = j - 1; // O(1) - Constant time
    }

    arr[j + 1] = elemToInsert; // O(1) - Constant time
  }
}

insertionSort(arr); // O(n^2) - Quadratic time
console.log(arr); // O(1) - Constant time
