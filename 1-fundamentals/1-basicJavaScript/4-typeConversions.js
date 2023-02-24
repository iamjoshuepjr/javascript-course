/**
 *  JavaScript String Casting
 *  author: Joshuép Jr.
 */

/**
 * We can use Number() function to convert 
 * strings and boolen values to numbers
 */

let result;

// string to number
result = Number('324');
console.log(result, typeof result);

result = Number('324e-1');
console.log(result, typeof result);

// Boolean to number
result = Number(true);
console.log(result, typeof result);

result = Number(false);
console.log(result, typeof result);

/**
 * We can also generate numbers from strings using parseInt(), parseFloat(),
 * unary operator (+) and Math.floor().
 */

result = parseInt('20.45');
console.log(result, typeof result);

result = parseFloat('20.45');
console.log(result, typeof result);

result = +'24.16'
console.log(result, typeof result);

result = Math.floor('45.54');
console.log(result, typeof result);