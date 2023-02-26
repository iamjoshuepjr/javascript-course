/**
 *  JavaScript - Functions
 *  author: Joshuép Jr.
 */

/**                      FUNCTIONS
  * A function is a block of code that performs a specific task.
  * To avoid repeating the same code all over places, 
  * you can use a function to wrap that code and reuse it. 
  */
 
/**
  *                  DECLARE A FUNCTION
  * To declare a funtion, you use the function keyword, followed by the function name,
  * a list of parameters, and the function body as follows:
  * 
  * function functionName(parameters){
  *    Function body
  * }
  */

// Reading input by node.js
 "use strict";
 const prompt = require("prompt-sync")({sigint:true});

 // creating the function
 function myFirstJSFunction() {
    console.log('Welcome to my JS function!');
 }

 // invoking the function
 myFirstJSFunction(); // Welcome to my JS function!

/**
 *                 FUNCTION PARAMETERS
 * A function can also be declared with parameters. A parameter is a value that is passed when declaring a function
 */
 
 function greet(name) {
    console.log("Hello, "+name+"! :)");
 }
 
 let name = prompt('Enter your name here: ');

 greet(name);

 // Add Two Numbers
 function add(a, b) {
    console.log("Sum: " + (a+b));
 }

 add(24, 16);

 /**
  *                   FUNCTION RETURN
  * The return statement can be used to return the value to a function call.
  * The return statement denotes that the function has ende. Any code after return is not executed.
  * If nothing is returned, the function returns an undefied value
  */
 
 // Declaring a function
 function addNumbers(a, b){
    return a + b;
 }

 // taking input from the user
 let number1 = parseInt(prompt('Enter the first value here: '));
 let number2 = parseInt(prompt('Enter the second value here: '));

 // caling function
 let result = addNumbers(number1, number2);

 // displaying the result
 console.log('Result: ' + result);