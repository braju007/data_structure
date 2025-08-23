function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) min_idx = j;
    }
    if (min_idx !== i) [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
  }
}

const arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log(arr);
// [11, 12, 22, 25, 64]
