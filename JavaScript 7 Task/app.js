// Q 1

function showDateTime() {
    let now = new Date();
    document.write(`<h2>Current Date & Time:</h2> <p>${now}</p>`);
}

// Function call
showDateTime();

// Q 2

function greetUser(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    alert(`Hello, ${fullName}! Welcome.`);
}

// Function call with user input
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
greetUser(firstName, lastName);

// Q 3

function addNumbers(num1, num2) {
    return num1 + num2;
}

// User input
let number1 = +prompt("Enter first number:");
let number2 = +prompt("Enter second number:");

// Function call & result display
let sum = addNumbers(number1, number2);
alert(`The sum of ${number1} and ${number2} is: ${sum}`);

// Q 4

function calculator(num1, num2, operator) {
    let result;
    
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
    } else if (operator === "%") {
        result = num2 !== 0 ? num1 % num2 : "Cannot find modulus with zero!";
    } else {
        result = "Invalid operator!";
    }

    return result;
}

// User input
let number01 = +prompt("Enter first number:");
let number02 = +prompt("Enter second number:");
let operator = prompt("Enter operator (+, -, *, /, %):");

// Function call & result display
let output = calculator(number01, number02, operator);
document.write(`<h2>Result: ${output}</h2>`);

// Q 5

function square(num) {
    return num * num;
}

// User input
let number = +prompt("Enter a number to find its square:");

// Function call & result display
let result = square(number);
alert(`The square of ${number} is: ${result}`);

// Q 6

function factorial(num) {
    if (num < 0) {
        return "Factorial of negative numbers is not defined!";
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

// User input
let number = +prompt("Enter a number to find its factorial:");

// Function call & result display
let result = factorial(number);
alert(`The factorial of ${number} is: ${result}`);

// Q 7

function showCounting(start, end) {
    if (start > end) {
        document.write(`<h2>Start number should be less than or equal to End number!</h2>`);
        return;
    }
    
    document.write(`<h2>Counting from ${start} to ${end}:</h2>`);
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}

// User input
let startNum = +prompt("Enter start number:");
let endNum = +prompt("Enter end number:");

// Function call
showCounting(startNum, endNum);

// Q 8

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }

    let hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);
    let hypotenuse = Math.sqrt(hypotenuseSquared);
    
    return hypotenuse;
}

// User input
let base = +prompt("Enter base of the triangle:");
let perpendicular = +prompt("Enter perpendicular of the triangle:");

// Function call & result display
let result = calculateHypotenuse(base, perpendicular);
alert(`The hypotenuse of the triangle is: ${result.toFixed(2)}`);

// Q 9

function calculateArea(width, height) {
    return width * height;
}

// Method 1: Arguments as values
let area1 = calculateArea(5, 10);
console.log(`Area (using values): ${area1}`);

// Method 2: Arguments as variables
let rectWidth = +prompt("Enter the width of the rectangle:");
let rectHeight = +prompt("Enter the height of the rectangle:");
let area2 = calculateArea(rectWidth, rectHeight);

alert(`Area (using variables): ${area2}`);

// Q 10

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Convert to lowercase & remove non-alphanumeric characters
    let reversedStr = str.split("").reverse().join(""); // Reverse string
    
    return str === reversedStr; // Check if original & reversed string are same
}

// User input
let userInput = prompt("Enter a word to check if it's a palindrome:");

// Function call & result display
if (isPalindrome(userInput)) {
    alert(`"${userInput}" is a palindrome!`);
} else {
    alert(`"${userInput}" is NOT a palindrome!`);
}

// Q 11

function capitalizeWords(str) {
    return str
        .split(" ") // String ko words me todna
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Har word ka pehla letter uppercase
        .join(" "); // Words ko wapas string me jodna
}

// User input
let userInput = prompt("Enter a sentence to capitalize each word:");

// Function call & result display
let result = capitalizeWords(userInput);
alert(`Capitalized String: ${result}`);

// Q 12

function findLongestWord(str) {
    let words = str.split(" "); // String ko words me todna
    let longestWord = ""; // Longest word store karne ke liye

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word; // Agar current word bada hai to update karna
        }
    }
    return longestWord;
}

// User input
let userInput = prompt("Enter a sentence to find the longest word:");

// Function call & result display
let result = findLongestWord(userInput);
alert(`The longest word is: ${result}`);

// Q 13

function countLetterOccurrences(str, letter) {
    let count = 0;

    for (let char of str) {
        if (char.toLowerCase() === letter.toLowerCase()) {
            count++; // Agar letter match kare to count badhao
        }
    }
    return count;
}

// User input
let userInput = prompt("Enter a string:");
let letterInput = prompt("Enter a letter to count:");

// Function call & result display
let result = countLetterOccurrences(userInput, letterInput);
alert(`The letter "${letterInput}" appears ${result} times in the string.`);

// Q 14

function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference.toFixed(2)}`);
}

function calcArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    console.log(`The area is ${area.toFixed(2)}`);
}

// User input
let userRadius = +prompt("Enter the radius of the circle:");

// Function calls
calcCircumference(userRadius);
calcArea(userRadius);

// ------------------------END----------------------- 