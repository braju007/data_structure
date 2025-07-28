function linearSearch(arr, target) {
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return null;
}

const arr = [0, 1, 2, 4, 7, 8, 9];
console.log(linearSearch(arr, 8));
