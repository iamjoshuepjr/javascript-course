/**
 *  JavaScript - Arrays multidimensional
 *  author: Joshuép Jr.
 */

/**
 *                   Multidimensionals Arrays
 * A multidimensional array is an array that contains another array
 */

 // Create a Multidimensional Array
 
 // Way 1
 const studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];
 console.log(studentsData);

 // Way 2
const currency1 = ['USD', 4855];
const currency2 = ['EUR', 5133];
const currency3 = ['POUND', 5800];

const currencies = [currency1, currency2, currency3];
console.log(currencies);

/**
  * Accesing array elements
  * To access an element in an array, you specify an inde in the square brackets []
  * 
  * arrayName[index]
  */
  
 // access the first item
 console.log(currencies[0]); // ['USD', 4855]
 
 // access the second item of the first inner array
 console.log(currencies[0][1]); // 4855
 
 // access the first item of the third inner array
 console.log(currencies[2][0]); // POUND