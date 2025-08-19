function isPalindrome(arr) {
    let n = arr.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (arr[i] !== arr[n - 1 - i]) {
            return false;
        }
    }

    return true;
}

// Example usage with if/else
let arr1 = [1, 2, 3, 2, 1];
let arr2 = [1, 2, 3, 4, 5];

if (isPalindrome(arr1)) {
    console.log(arr1, "=> Palindrome");
} else {
    console.log(arr1, "=> Not Palindrome");
}

if (isPalindrome(arr2)) {
    console.log(arr2, "=> Palindrome");
} else {
    console.log(arr2, "=> Not Palindrome");
}
