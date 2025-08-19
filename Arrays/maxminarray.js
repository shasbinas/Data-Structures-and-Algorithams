/* find max & min element */
function findMaxMin(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return { max, min };
}
let nums = [64, 25, 12, 22, 11];
let result = findMaxMin(nums);
console.log("Array:", nums);
console.log("Max:", result.max);
console.log("Min:", result.min);
