function ternarySearch(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);

    if (arr[mid1] === key) return mid1;
    if (arr[mid2] === key) return mid2;

    if (key < arr[mid1]) {
      right = mid1 - 1;
    } else if (key > arr[mid2]) {
      left = mid2 + 1;
    } else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }
  return -1;
}

const sortedArr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const key = 17;
console.log(ternarySearch(sortedArr, key)); // 8
console.log(ternarySearch(sortedArr, 1)); // 0
console.log(ternarySearch(sortedArr, 10)); // -1
