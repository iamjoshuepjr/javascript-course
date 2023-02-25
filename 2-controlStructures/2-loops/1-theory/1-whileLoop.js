/**
 *  JavaScript Control Structures - Loops
 *  author: Joshuép Jr.
 */

/**
 *  JavaScript while loop is used to run a specific code until a certain condition is met.
 *  1. A while loop evaluates the expression inside the parentheses (),
 *  2. if the expression evaluates to true, the code inside the while loop is executed
 *  3. The expression is evaluated again
 *  4. This process continues until expression is false
 *  5. When the expression evaluates to false, the loop stops
 *  
 *  Syntax:
 *  while(condition){
 *    block of code
 *  }
 */

// Reading input by node.js
"use strict";
const prompt = require("prompt-sync")({sigint:true});

let count = 1;
while (count < 11) {
    console.log(`Number: (${count})`);
    count++;
}

let sum = 0;

let number = parseInt(prompt('\nEnter a positive number: '));
while (number >= 0) {
    sum += number;
    number = parseInt(prompt('Enter another positive number: '));
}

console.log(`The sum is: (${sum})`);

