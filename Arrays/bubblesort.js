/* bubble sort */
function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap using temp variable
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // Show array after each pass
        console.log(`Pass ${i + 1}:`, arr);

        if (!swapped) break; // already sorted
    }

    return arr;
}

// Example usage
let nums = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", nums);
let sorted = bubbleSort(nums);
console.log("Sorted:", sorted);

