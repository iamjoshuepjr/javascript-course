/**
 *  JavaScript Control Structures - Decision Making
 *  author: Joshuép Jr.
 */

/**  
 * The switch statement evaluates an expression 
 * and executes the corresponding body that matches
 * the expression's result
 
 * Syntax:
 * 
 * switch(expression){
 *   case value1:
 *    body of case 1
 *    break;
 *   case value2:
 *     body of case 2
 *     break;
 *   case valueN:
 *    body of case N
 *    break;
 *   default:
 *    body of default
 * }
 * */

 "use strict";
 const prompt = require("prompt-sync")({sigint:true});

 let day = parseInt(prompt('Enter the number of a day of the week: '));
 let dayName = "";

 switch (day) {
    case 1:
        dayName = 'Sunday';
        break;

    case 2:
        dayName = 'Monday';
        break;
    
    case 3:
        dayName = 'Tuesday';    
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
    case 7:
        dayName = 'Saturday';
    default:
        dayName = 'Invalid day'
        break;
 }

 console.log(`The day (${day}), is ${dayName}`);