1.//Do the below programs in anonymous function & IIFE
//A)Print odd numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})(numbers);

//B)Convert all the strings to title caps in a string array
let strings = ["hello", "world", "javascript", "example"];

let titleCapsArray = (function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr;
})(strings);

console.log(titleCapsArray);

//C)Sum of all numbers in an array
let numbers = [1, 2, 3, 4, 5];

let sum = (function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
})(numbers);

console.log(sum);
//D)Retum all the prime numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = (function(arr) {
    let isPrime = function(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    
    return arr.filter(num => isPrime(num));
})(numbers);

console.log(primeNumbers);

//E) Retum all the palindromes in an array
let strings = ["radar", "hello", "level", "world", "deified"];

let isPalindrome = function(str) {
    return str === str.split('').reverse().join('');
};

let palindromeStrings = function(arr) {
    return arr.filter(str => isPalindrome(str));
};

console.log(palindromeStrings(strings));

//F)Return median of two sorted arrays of the same size
function findMedianSortedArrays(arr1, arr2) {
    let mergedArray = mergeSortedArrays(arr1, arr2);
    let length = mergedArray.length;
    if (length % 2 === 0) {
        let mid = length / 2;
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[Math.floor(length / 2)];
    }
}

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
console.log(findMedianSortedArrays(arr1, arr2));

//G)Remove duplicates from an array
function removeDuplicatesUsingSet(arr) {
    return [...new Set(arr)];
}

function removeDuplicatesUsingLoop(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
let array = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicatesUsingSet(array));
console.log(removeDuplicatesUsingLoop(array));
//H)Rotate an array by k times
function rotateArray(arr, k) {
    if (arr.length === 0 || k === 0) {
        return arr;
    }

    k = k % arr.length; // Normalize k to handle cases where k > arr.length

    // Reverse the entire array
    reverseArray(arr, 0, arr.length - 1);
    // Reverse the first k elements
    reverseArray(arr, 0, k - 1);
    // Reverse the remaining elements
    reverseArray(arr, k, arr.length - 1);

    return arr;
}

function reverseArray(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

let array = [1, 2, 3, 4, 5];
let k = 2;
console.log(rotateArray(array, k));
