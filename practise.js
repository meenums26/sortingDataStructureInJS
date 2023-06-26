const arr = [3, 4, 2, 56, 3, 7, 3, 8];

// SELECTION SORT
// TIME COMPLEXITY ANALYSIS = O(N)^2
// SPACE COMPLEXITY ANALYSIS = 0(1) => sorting is done in-place without using any extra data structures.
const selectionSort = (arr) => {
  let arrLen = arr.length; // O(1) - Constant time

  const swapFun = (arr, idx1, idx2) => { // O(1) - Constant time
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  }

  for (let i = 0; i < arrLen; i++) { // O(n) - Linear time
    let idxSmall = i; // O(1) - Constant time

    for (let j = i + 1; j < arrLen; j++) { // O(n) - Linear time
      if (arr[j] < arr[idxSmall]) idxSmall = j; // O(1) - Constant time
    }

    if (idxSmall !== i) { // O(1) - Constant time
      swapFun(arr, i, idxSmall); // O(1) - Constant time
    }
  }

  return arr;
}

selectionSort(arr); // O(n^2) - Quadratic time
console.log(arr); // O(1) - Constant time
