function search(arr, target) {
  if (arr.length === 0) return null;
  return recursiveSearch(arr, target, 0, arr.length - 1);
}

function recursiveSearch(arr, target, leftIndex, rightIndex) {
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) return middleIndex;
    else if (arr[middleIndex] < target) {
      return recursiveSearch(arr, target, middleIndex + 1, rightIndex);
    } else {
      return recursiveSearch(arr, target, leftIndex, middleIndex - 1);
    }
  }
  return -1;
}

const arr = [0, 1, 2, 4, 7, 8, 9];
console.log(search(arr, 4));
