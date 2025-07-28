function binarySearch(arr, target) {
  if (arr.length === 0) return null;
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) return middleIndex;
    else if (arr[middleIndex] < target) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
}

const arr = [0, 1, 2, 4, 7, 8, 9];
console.log(binarySearch(arr, 9)); // 6
console.log(binarySearch(arr, 1)); // 1
console.log(binarySearch(arr, 5)); // -1
