/**
 *  JavaScript Logical Operators
 *  author: Joshuép Jr.
 */

/**
 * The logical operators are important in JavaScript becaise they allow you
 * to compare variables and do something based on the result of that comparison.
 * For example: if the result of the comparison is true, you can run a block of code;
 * if it's false, you can execute anoter code block.
 * 
 * JavaScript provides three logical operators:
 * Logical NOT (!)
 * Logical OR (||)
 * Logical AND (&&)
*/
 
/** 
 * ==========================================================
 *         The logical NOT operator (!)
 *  The (!) operator can be applied to a single value
 *  of any type, not just a Boolean value.
 * When you apply the (!) operator to a boolean value, 
 * the (!) returns true if the value is false and vice versa
 */ 

let eligible = false, required = true;
console.log("!Eligible: "+!eligible); // true
console.log("!Required: "+!required); // false

/** 
 * =========================================================================
 *         The Double-negation operator (!!)
 *  The (!!) uses the logical NOT operator (!) twice 
 *  to convert a value to its real boolean value. 
 *  - The first (!) operator negates the Boolean value of the number variable.
 *    If the number is true, then the (!) operator makes it false and vice versa
 *  - The second (!) operator negtes that result of the first (!) operator and
 *    returns the real boolean value of the number variable
 */ 

let number = 10;
console.log(!!number); // true

/** 
 * ==========================================================
 *            The logical AND operator (&&)
 *  The logical AND (&&) (logical conjunction) operator for 
 *  a set of boolean operands will be true if and only if all
 *  the operands are true. Otherwise it will be false.
 */ 

eligible = true;
required = true;
let result;

result = eligible && required;
console.log("Eligible ("+eligible+") AND(&&) Required("+required+"): Result: ("+result+")"); // true

/** 
 * ==============================================================
 *            The logical OR operator (&&)
 *  The logical OR (||) (logical disjunction) operator for 
 *  a set of operands is true if and only if one of 
 *  its operands is true. It's tipically used with 
 *  boolean (logical) values.
 */ 

eligible = false;
result = eligible || required;
console.log("Eligible ("+eligible+") OR(||) Required("+required+"): Result: ("+result+")"); // true