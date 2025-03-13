//  Q 1 

let user = +prompt("Enter a positive number:");
if (user > 0) console.log(user, Math.round(user), Math.floor(user), Math.ceil(user));
else console.log("Invalid number!");

//  Q 2

let user = +prompt("Enter a negative number:");
if (user < 0) console.log(user, Math.round(user), Math.floor(user), Math.ceil(user)); 
else console.log("Please enter a valid negative number."); 
        
// Q 3 

 let user = +prompt("Enter a positive floating number:");
 if (user > 0 && !Number.isInteger(user)) 
 console.log(user, Math.round(user), Math.floor(user), Math.ceil(user));
 else console.log("Please enter a valid positive floating number.");

//  Q 4 

let num = +prompt("Enter a negative floating number:");
if (num < 0 && !Number.isInteger(num)) console.log(num, Math.round(num), Math.floor(num), Math.ceil(num));
else console.log("Please enter a valid negative floating number.");

// Q 4

let num = +prompt("Enter a number:");
console.log(`Absolute Value: ${Math.abs(num)}`);

// Q 5

let dice = Math.floor(Math.random() * 6) + 1;
console.log(`Dice Rolled: ${dice}`);

// Q 6

let coin = Math.random() < 0.5 ? "Heads" : "Tails";
console.log(`Coin Tossed: ${coin}`);

// Q 7

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(`Random Number: ${randomNum}`);

// Q 8

let userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
let weight = parseFloat(userInput);
console.log(`Your weight is: ${weight} kg`);

// Q 9

let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = +prompt("Guess a number between 1 and 10:");

if (userGuess === secretNumber) console.log("Congratulations! You guessed the secret number.");
else console.log(`Wrong guess! The secret number was ${secretNumber}. Try again!`);

// Q 10

let now = new Date();
console.log(`Current Date & Time: ${now}`);

// Q 11

let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
let currentMonth = months[new Date().getMonth()];
alert(`Current Month: ${currentMonth}`);

// Q 12

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDay = days[new Date().getDay()];
alert(`Today is: ${currentDay}`);

// Q 13

let day = new Date().getDay();
if (day === 0 || day === 6) alert("It’s Fun day!");
else alert("It's a regular day!");

// Q 14

let date = new Date().getDate();
alert(date < 16 ? "First fifteen days of the month" : "Last days of the month");

// Q 15

let minutesSince1970 = Math.floor(Date.now() / (1000 * 60));
console.log(`Minutes since Jan 1, 1970: ${minutesSince1970}`);

//  Q 15

let hours = new Date().getHours();
alert(hours < 12 ? "It's AM" : "It's PM");

// Q 16

let laterDate = new Date(2020, 11, 31); // Month 11 means December (0-based index)
console.log(`Last Date of 2020: ${laterDate}`);

// Q 17

let ramadanStart = new Date(2015, 5, 18); // June = 5 (0-based index)
let today = new Date();
let daysPassed = Math.floor((today - ramadanStart) / (1000 * 60 * 60 * 24));

alert(`Days passed since 1st Ramadan 2015: ${daysPassed}`);

// Q 18

let referenceDate = new Date(2015, 0, 1); // Jan = 0 (0-based index)
let startDate = new Date(1970, 0, 1); // Unix Epoch Time (Jan 1, 1970)
let secondsElapsed = Math.floor((referenceDate - startDate) / 1000);

console.log(`Seconds elapsed from Jan 1, 1970 to Jan 1, 2015: ${secondsElapsed}`);

// Q 19

let currDate = new Date();
console.log("Current Date & Time:", currDate);

currDate.setHours(currDate.getHours() + 1);
console.log("Updated Date & Time (1 hour ahead):", currDate);

// Q 20

let currDate = new Date();
currDate.setFullYear(currDate.getFullYear() - 100);
alert(`Date 100 years back: ${currDate}`);

// Q 21

let age = +prompt("Enter your age:");
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;

alert(`Your birth year is: ${birthYear}`);

// Q 22

let customerName = prompt("Enter your name:");
let currentMonth = new Date().toLocaleString('en-us', { month: 'long' }); // Current month in words
let units = +prompt("Enter number of units:");
let chargesPerUnit = 20; // Fixed charges per unit
let netAmount = units * chargesPerUnit;
let lateSurcharge = netAmount * 0.1; // 10% late payment surcharge
let grossAmount = netAmount + lateSurcharge;

// Rounding to 2 decimal places
netAmount = netAmount.toFixed(2);
lateSurcharge = lateSurcharge.toFixed(2);
grossAmount = grossAmount.toFixed(2);

// Displaying the bill
document.write(`
    <h2>K-Electric Bill</h2>
    <p><b>Customer Name:</b> ${customerName}</p>
    <p><b>Current Month:</b> ${currentMonth}</p>
    <p><b>Number of Units:</b> ${units}</p>
    <p><b>Charges per Unit:</b> ${chargesPerUnit}</p>
    <p><b>Net Amount Payable (within Due Date):</b> ${netAmount}</p>
    <p><b>Late Payment Surcharge:</b> ${lateSurcharge}</p>
    <p><b>Gross Amount Payable (after Due Date):</b> ${grossAmount}</p>
`);

// ----------------END--------------- //
