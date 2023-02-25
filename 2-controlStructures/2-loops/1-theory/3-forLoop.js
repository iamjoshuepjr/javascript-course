/**
 *  JavaScript Control Structures - Loops
 *  author: Joshuép Jr.
 */

/**
 *  JavaScript for loop is used to run a block of code for a certain number of items.
 *  Syntax:
 *    for (initialExpression; testExpression; updateExpression){
 *        body of the loop
 *    }
 * 
 * 1. The initialExpression initializes and/or declares variables and executes only once
 * 2. The conditionExpression (condition) is evaluated. If the condition is true,
 *    the body of the for loop is executed
 * 3. The updateExpression updates the value of initialExpression
 * 4- The condition is evaluates again. The process continues until the condition is false
 */
 
// Reading input by node.js
"use strict";
const prompt = require("prompt-sync")({sigint:true});

for (let index = 1; index <25; index++){
    console.log(`Number: ${index}`);
}