/**
 *  JavaScript Ternary Operators
 *  author: Joshuép Jr.
 */

/**
 * The conditional (ternary) operator is the only 
 * JavaScript operator that takes three operands:
 * a condition followed by a question mark (?), 
 * then an expresion to execute if the condition is truthy
 * folloed by a colon (:), and finally the expression to execute
 * if the condition is falsy. 
 * This operator is frecuently used as an alternative to an if-else statement
 * 
 * let variable = value1;
 *  if (result == true) {
 *       statement(s)
 *  }else {
 *       statement(s) 
 * }
 */

let age = 19;
let result = (age >= 18) ? "Adult": "Not Adult"
console.log(result);