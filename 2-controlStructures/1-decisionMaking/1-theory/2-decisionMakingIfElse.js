/**
 *  JavaScript Control Structures - Decision Making
 *  author: Joshuép Jr.
 */

/**
 * An if statement can have an optional else clause.
 *  
 * The if-else statement evaluates the condition inside the parenthesis ()
 *  1. if the condition is evaluated to true, the code inside the body of if is executed
 *    a. the code inside the body of if is executed
 *    b. the code inside the body of else is skipped from execution
 
 *  2. if the condition is evaluated to false, the code inside the body of if is skipped
 *    a. the code inside the body of else is executed
 *    b. the code inside the body of if is skipped from execution
 * Syntax:
 * 
 *  if(codition){ 
 *    block of code if condition is true
 *   }else {
 *    block of code if condition is false
 *   }
 * */

"use strict";
const prompt = require("prompt-sync")({sigint:true});

let number = parseInt(prompt('\nEnter a number: '));

if(number > 0){
    console.log(`The number, ${number}, is positive`);
}else {
    console.log('The number is either a negative number or 0');
}

let age = parseInt(prompt('\nEnter your age: '));
if (age >= 18) {
    console.log('You can sing up.');
} else {
    console.log('You must be at least to sing up.');
}
