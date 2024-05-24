//2.Do the below programs in arrow functions
//A)Print odd numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printOddNumbers = (arr) => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers(numbers);

//B)Convert all the strings to title caps in a string array
let strings = ["hello", "world", "javascript", "example"];

const convertToTitleCaps = (arr) => {
    return arr.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
};

let titleCapsArray = convertToTitleCaps(strings);
console.log(titleCapsArray);

//C)Sum of all numbers in an array
let numbers = [1, 2, 3, 4, 5];

const sumOfNumbers = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0);
};

console.log(sumOfNumbers(numbers));

//D)Return all the prime numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = (num) => {
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

const primeNumbers = (arr) => {
    return arr.filter(num => isPrime(num));
};

console.log(primeNumbers(numbers));

//E) Return all the palindromes in an array
let strings = ["radar", "hello", "level", "world", "deified"];

const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
};

const palindromeStrings = (arr) => {
    return arr.filter(str => isPalindrome(str));
};

console.log(palindromeStrings(strings));


