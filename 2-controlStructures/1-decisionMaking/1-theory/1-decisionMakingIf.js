/**
 *  JavaScript Control Structures - Decision Making
 *  author: Joshuép Jr.
 */

/**
 * Simple if decision-making, the most simple decision-making statement.
 * It's used to decide whether a certain statement or block of statement will be executed or not.
 * 
 * The if statement evaluates the condition inside the parenthesis ()
 *  - if the condition is evaluated to true, the code inside the body of if is executed
 *  - if the condition is evaluated to false, the code inside the body of if is skipped
 * Syntax:
 * 
 *  if(codition){ if's body }
 * */
// Reading input by node.js
"use strict";
const prompt = require("prompt-sync")({sigint:true});

let name = prompt('\nEnter your name: ');
console.log(`Hello, ${name}`);

let number = parseInt(prompt("\nEnter a number here: "));

if (number > 0) {
    console.log(`The number, ${number}, is positive`);
}
console.log('\nEnd of the if statement');

// Nested if statement

let age = parseInt(prompt('Enter your age here: '));
let state = prompt('Enter the state where you live: ');

if(state = 'CA'){
    if (age >= 16) {
        console.log('You can drive!');
    }
}
console.log('\nEnd of the if statement');
