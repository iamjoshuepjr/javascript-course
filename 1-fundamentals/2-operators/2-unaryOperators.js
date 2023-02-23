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
console.log(y); // 10

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
console.log(+string); // 10

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

console.log(+person); // 24

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

console.log(+car); // 23000

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

// x = 10
y = -x;
console.log(y); // -10


/**
 * ============================================================================
 *                INCREMENT / DECREMENT OPERATORS
 * The increment operator has two plus signs (++) 
 * while the decrement operator has two minus signs (--)
 * Both increment and decrement operators have two version: prefix and postfix.
 * And you place the prefix and postfix versions of the increment or decrement operators
 * before and after the varibale to which they apply.
 */

/**
 * ===================
 *  Prefix increment operator
 */
 
let age = 24;
++age; // age = age + 1
console.log("Age: "+age); // Age: 25

// Prefix drecrement operator
let weight = 70;
--weight; // weight = weight - 1
console.log("Weight: "+weight+" KG"); // Weight: 69 KG

/* 
   When you apply the prefix increment or decrement, 
   JavaScript changes the variable before evaluating the statement
*/

weight = 90;
weight = ++weight + 5;
console.log("Weight: "+weight+" KG"); // Weight: 96 KG

/**
 * First: Increase the weight on the right-hand side so ++weight is 91
 * Second: Add five to the ++weight (91) that returns 96
 * Third: Assign the result to the weight on the left-hand side.
 */

// Likewise, the following example uses a prefix decrement operator: 

weight = 100;
weight = --weight + 5;
console.log("Weight: "+weight+" KG"); // Weight: 104 KG

/**
 * First: Subtract one from the weight on the right-hand side so --weight is 99
 * Second: Add five to the --weight (99) that returns 104
 * Third: Assign the result to the weight on the left-hand side.
 */

/**
 * ===========================
 *  Postfix increment operator
 */

// The postfix increment or decrement operator change the value after the statement is evalueted. 

let salary = 9000;
let newSalary = salary++ + 500;
console.log("New Salary: $" + newSalary); // New Salary: $9500
console.log("New Var Salary value: " + salary); // New Var Salary value: $9001

/**
 * How it works?
 * First: Add Five Hundred (500) to weigth (9000) and assign the result to the newWeight (9500)
 * Second: Add one to the weight (9000 + 1) variable after the second statement completes, the weight becomes 9001
 * Third: Output both newWeight and weight to the console
 */