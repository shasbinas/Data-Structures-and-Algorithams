function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the current element is the minimum
        let minIndex = i;

        // Find the actual minimum element in the remaining array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of this pass
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

        // Print array
