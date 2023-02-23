/**
 *  JavaScript Unary Operators
 *  author: Joshuép Jr.
 */

/* =================================== 
            UNARY OPERATORS
   Unary operators work on the value.
*/

/**
 * ====================================================================
 *                            UNARY PLUS
 * The unary plus operator is a simple plus sing (+).
 * If you place the unary plus operator before a numeric value, it does nothing. 
 */

let x = 10;
let y = +x;
console.log(y);

/* When you apply the unary plus operator to a non-numeric value, it performs a number conversion 
   using the Number() function with the the followning rules: 
   
   ------------------------------------------------------------------------------------------------------
   value      |  result  
   ------------------------------------------------------------------------------------------------------
   boolean       false to 0, true to 1
   string        Convert the string value based on a set of specific rules
   object        Call the valueOf() and/or toString() method to get rthe value to convert into a number
*/

// The following uses the unary plus operator (+) to convert the string '10' to the number 10
let string = '10';
console.log(+string);

// The following example uses the unary plus operator (+) converts a boolean value into a number
let True =  true, False = false;
console.log(+True);  // true to 1
console.log(+False); // false to 0

// Supose yo have a product object with the toString method as follows:
let person = {
    name: 'Joshuép Jr.',
    toString: function () {
        return '24';
    }
};

console.log(+person);

/**
 * Here, we apply the unary operator (+) on the person object that has the toString() method,
 * JavaScript engine call toString() method to get the value ('24') and convert it into a number.
*/

// Adds the valueof() method to the car object
let car = {
    brand: 'Camaro',
    toString: function () {
        return '34000';
    },

    valueOf: function () {
        return '23000'
    }
};

console.log(+car);

/**
 * In this example, the car object has the valueOf() method, the JavaScript engine calls it 
 * instead of the toString method to get the value to convert
*/


/**
 * ====================================================================
 *                            UNARY MINUS
 * The unary minus operator is a simple single minus sing (-).
 * If you apply the minus operator to a number, it neagtes the number.
 */

y = -x;
console.log(y);


/**
 * ============================================================================
 *                INCREMENT / DECREMENT OPERATORS
 * The increment operator has two plus signs (++) 
 * while the decrement operator has two minus signs (--)
 * Both increment and decrement operators have two version: prefix and postfix.
 * And you place the prefix and postfix versions of the increment or decrement operators
 * before and after the varibale to which they apply.
 */



let age = 24;
++age;
console.log("Age: "+age);

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
