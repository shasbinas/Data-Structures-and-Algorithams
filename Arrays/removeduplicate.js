function removeDuplicates(arr) {
    return [...new Set(arr)];
}


let nums = [1, 2, 3, 2, 4, 1, 5, 3];
console.log("Original:", nums);
console.log("Without Duplicates:", removeDuplicates(nums));
