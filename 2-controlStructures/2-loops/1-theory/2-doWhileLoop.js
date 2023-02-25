/**
 *  JavaScript Control Structures - Loops
 *  author: Joshuép Jr.
 */

/**
 *  The do while loop is similar to while loop. However, the body of do while loop 
 *  is executed once before the test expression is checked.
 *  ------------------------------------------------------------------------------------- 
 *   1. The body of the loop is executed at first. Then the testExpression is evaluated
 *   2. If the testExpression evaluates to true, the body of the loop inside
 *      the do statement is executed again
 *   3. The testExpression is evaluated once again
 *   4. If the testExpression evaluates to true, the body of the loop inside
 *      the do statement is executed once again
 *   5. This process continues until the testExpression evaluates to false. Then te loop stops 
 * 
 *  Syntax:
 *  do {
 *     block of code
 *  }while(testExpression);
 */

// Reading input by node.js
"use strict";
const prompt = require("prompt-sync")({sigint:true});

// example 1
let count = 0;
do {
    console.log(`Number: (${count})`);
    count++;
} while (count < 5);

// example 2
let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a positive number: '));
} while (number >= 0);
console.log(`Sum: (${sum})`);

// example 3
const MIN = 1;
const MAX = 10;

let secretNumber = Math.floor(Math.random() * (MAX - MIN)) + MIN;
let guesses = 0; // store the number of guesses
let hint = ''; // store the number of hint
number = 0;

do {
    number = parseInt(prompt(`Please enter a number between ${MIN} and ${MAX}: ` + hint));
    guesses++;

    if(number > secretNumber){
        hint = 'and less than ' + number +": ";
    } else if (number < secretNumber){
        hint = 'and greater than ' + number+": ";
    } else if (number == secretNumber){
        console.log(`Bravo! you're correct after ${guesses} guess(es).`);
    }
} while (number != secretNumber);