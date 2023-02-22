/**
 *  JavaScript Increase - Decrease Operators
 *  author: Joshuép Jr.
 */


// =========== INCREASE - DECREASE OPERATORS =========== 
let a = 23, b = 18;
let result = a + b;
console.log("Variables without any increase:\n1 -> " + a +"\n2 -> " +b);
console.log("Result: ");

// pre-increase (first increase operator, before variable)
// this operator
let pre = ++a;
console.log("Increase with variables\nValue: " + a + "\nPre-Increase: " + pre);

// post-increase (first variable before, increase operator)
let post = b++;
console.log("Increase with variables\nValue: " + b + "\nPost-Increase: " + post);

// Pre-decrement 
pre = --a;
console.log("Decrease with variables\nValue: " + b + "\nPre-decrease: " + post);

// Post-decrement 
post = b--;
console.log("Decrease with variables\nValue: " + b + "\nPost-decrease: " + post);
