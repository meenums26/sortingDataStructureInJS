// BINARY SEARCH
// ONLY FOR SORTED ARRAY


// Big-O = Time Complexity => O(log n)
// Big-O = Space Complexity => O(1)
const arr = [2, 3, 3, 4, 7, 8, 56];

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < middleIndex) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 8));
