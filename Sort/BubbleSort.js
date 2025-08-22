function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true
            }
        }
    } while (swapped);
}
const arr = [10, 8, 7, -5, -2, 0];
bubbleSort(arr);
console.log(arr);
// [-5, -2, 0, 7, 8, 10]