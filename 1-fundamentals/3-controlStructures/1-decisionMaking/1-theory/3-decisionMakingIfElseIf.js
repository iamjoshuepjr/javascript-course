/**
 *  JavaScript Control Structures - Decision Making
 *  author: Joshuép Jr.
 */

/**  
 * The if-else statement is used to executed a block of code among two alternatives.
 * However, if you need to make a choice between more than two aternatives
 * if-else if -else can be used.
 * 
 *  - if the condition 1 is evaluated to true, the code inside the block 1 is executed
 *  - if the condition 1 is evaluated to false, then the condition 2 is evaluated
 *    a. if the condition 2 is true, the code inside the block 2 is executed
 *    b. if the condition 2 is false, the code inside the block 3 is executed
 * Syntax:
 * 
 *  if(codition 1){ 
 *    code block 1
 *   }else if(condition 2){
 *    code block 2
 *   }else {
 *    code block 3
 *   }
 * */

 "use strict";
 const prompt = require("prompt-sync")({sigint:true});

 let number = parseInt(prompt('Enter a number here: '));

 if (number > 0) {
    console.log(`The number, ${number}, is positive`);
 } else if (number == 0) {
    console.log('The number is zero');
 }else {
    console.log(`The number, ${number}, is neagative`);
 }
 

 let monthNum = parseInt(prompt('Enter the number of a month: '));
 let month = "";
 if (monthNum == 1) {
    month = 'January';
 } else if(monthNum == 2){
    month = 'February';
 } else if(monthNum == 3){
    month = 'March';
 } else if(monthNum == 4){
    month = 'April';
 } else if(monthNum == 5){
    month = 'May';
 } else if(monthNum == 6){
    month = 'June';
 } else if(monthNum == 7){
    month = 'July';
 } else if(monthNum == 8){
    month = 'August';
 } else if(monthNum == 9){
    month = 'September';
 } else if(monthNum == 10){
    month = 'October';
 } else if(monthNum == 11){
    month = 'November';
 } else if(monthNum == 12){
    month = 'November';
 } else {
    month = 'Invalid Month'
    console.log(`The month, ${monthNum}, is an invalid month`);
 }
 
 console.log(`The month (${monthNum}), is ${month} month`);