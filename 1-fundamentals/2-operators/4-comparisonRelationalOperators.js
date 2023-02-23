/**
 *  JavaScript Comparison - Relational Operators
 *  author: Joshuép Jr.
 */


/**
 * A comparison operator returns a boolean value
 * indicanding that the conparison is true or false
*/
 
/** 
 * ==========================================
 *            Equal Operator (==)
 *  Returns true if the operands are equal
 */ 

 let month = 3;
 let number = 3;
 let equality = month == number;
 console.log("Are the operands Equal?: ", equality); // Are the operands Equal?: true

/** 
 * ===========================================
 *         Strict Equal Operator (===)
 *  Returns true if the operands are equal 
 *  and of the same type.
 */ 

 let salary = 9000;
 let saving = '9000';
 equality = salary === saving;
 console.log("Are the operands Equal?: ", equality); // Are the operands Equal?: false
 
 let brand1 = 'Camaro';
 let brand2 = 'Camaro';
 equality = brand1 === brand2;
 console.log("Are the operands Equal?: ", equality); // Are the operands Equal?: true
 
 /** 
 * ===========================================
 *           Not Equal Operator (!=)
 *  Returns true if the operands are not equal
 */ 

let back = '23';
let front = 24;
equality = back != front;
console.log("Aren't they Equal?: ", equality); // Aren't they Equal?: true

/** 
 * ===================================================
 *           Not Equal Operator (!=)
 *  Returns true if the operands are of the same type
 *  but not equal, or are of different type.
 */

let password = "12345";
let confirm = 12345;
equality = password !== confirm;
console.log("Aren't they Equal?: ", equality); // Aren't they Equal?: true

/** 
 * ===================================================
 *           Greater than Operator (>)
 *  Returns true if the left operands is greater than
 *  the right operand.
 */

let temperatureF = 90;
let temperatureC = 33;
let result = temperatureF > temperatureC;
console.log("Is TemperatureF ("+temperatureF+")° greater than TemperatureC ("+temperatureC+")°?: "+result); // Is TemperatureF (90)° greater than TemperatureC (33)°?: true

/** 
 * ===================================================
 *           Greater than or equal Operator (>=)
 *  Returns true if the left operands is greater than
 *  or equal to the right operand.
 */

let amounth1 = 5000;
let amounth2 = 4000;
result = amounth1 >= amounth2;
console.log("Is Amounth 1 $("+amounth1+") greater than or equal to Amounth 2 $("+amounth2+"): "+result); // Is Amounth 1 $(5000) greater than or equal to Amounth 2 $(4000): true

/** 
 * ===================================================
 *           Less than Operator (<)
 *  Returns true if the left operands is less than
 *  the right operand.
 */

result = temperatureC < temperatureF;
console.log("Is TemperatureC ("+temperatureC+")° less than TemperatureF ("+temperatureF+")°?: "+result); // Is TemperatureC (33)° less than TemperatureF (90)°?: true

/** 
 * ===================================================
 *           Less than or equal to Operator (<=)
 *  Returns true if the left operands is less than
 *  or equal to the right operand.
 */

result = amounth2 <= amounth1;
console.log("Is Amounth 2 $("+amounth2+") less than or equal to Amounth 1 $("+amounth1+"): "+result); // Is Amounth 2 $(4000) less than or equal to Amounth 1 $(5000): true