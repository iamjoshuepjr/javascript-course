/**
 *  JavaScript Assignment Operators
 *  author: Joshuép Jr.
 */


/**
 * Assignmet operators are used to assign values to a variable
 * Syntax: 
 * let variable = value;
 */

// Compound Assignment Operators assign values to JavaScript variables
let value = 23182429;
console.log("Value: "+ value);

// Addition assignment
value += 2; // value = value + 2
console.log("Addition assignment: "+ value);

// Substraction assignment
value -= 20; // value = value - 20
console.log("Substraction assignment: "+ value);

// Multiplication assignment
value *= 5; // value = value * 5
console.log("Multiplication assignment: "+ value);

// Division assigment
value /= 2; // value = value / 2
console.log("Division assigment: "+ value);

// Remainder assigment
value %= 1; // value = value % 1
console.log("Remainder assigment: "+ value);

// Exponentiation assignment
value **= 3 // value = value ** 3
console.log("Exponentiation assignment: "+ value);

// Chaining JavaScript assignment operators
let a = 10, b = 20, c = 30; // individual values
a = b = c; // all variables are 30