function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];  // The current element to be placed
        let j = i - 1;

        // Shift elements that are greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        // Place the key in its correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage
let nums = [64, 25, 12, 22, 11];
console.log("Original:", nums);
let sorted = insertionSort(nums);
console.log("Sorted:", sorted);
