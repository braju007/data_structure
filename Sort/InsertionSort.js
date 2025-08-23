function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // The element to insert
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than current,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Shift element rightward
      j--;
    }

    arr[j + 1] = current; // Insert current in the correct location
  }

  return arr;
}

const unsortedArray = [5, 3, 8, 1, 2];
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted:", sortedArray);
// Sorted: [1, 2, 3, 5, 8]
