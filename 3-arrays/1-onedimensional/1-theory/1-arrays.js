/**
 *  JavaScript - Arrays One-Dimensional
 *  author: Joshuép Jr.
 */

/**                                                    ARRAYS
  * In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index.
  * =============================================================================================================
  *                                               Characteristics
  * 1. An array can holf values of mixed types. For example: number, strings, boolean, and null.
  * 2. The size of an array is dinamic and auto-growing. You don't need specify the array size up front.
  */

/**
 *                                           Creating JavaScript arrays
 * ===============================================================================================================
 * JavaScript provides you two ways to create an array. The first one is to use the Array constructor as follows:
 */
 
/**
 * Array() constructor
 */

 let scores = new Array(); // Empty Array, does hold any element

 /**
  * if you know the number of elements that the array will hold, 
  * you can create an array with an initial size as follows:
  */ 
 let degrees = new Array(10);

 /**
  * To create an array and initialize it with some elements, 
  * you pass the elements as an comma-separated list 
  * into the Array() constructor
  */
 let marks = new Array(9, 10, 8, 9, 9); // Array with initial size

 /**
  * JavaScript allows you to omit the new operator when you use the Array() constructor
  */
 let athletes = Array();

 /**
  * We rarelly use the Array() constructor to create an array.
  * The more preferred way to create an array is to use the array literal notation.
  * The array literal form uses the square brackets without specefying any element
  */
 
 /**
  * Array Literal 
  * let arrayName = [element1, element2, ...]
  */

 let colors = ['red', 'green', 'blue'];

 // To creaate an empty array
 let emptyArray = [];

 /**
  * Accesing array elements
  * To access an element in an array, you specify an inde in the square brackets []
  * 
  * arrayName[index]
  */
  let cities = ['Los Angeles', 'San Diego', 'San Jose', 'San Fransisco', 'Pittsburg'];
  
  console.log(cities[0]); // Los Angeles
  console.log(cities[1]); // San Diego
  console.log(cities[2]); // San Jose
  console.log(cities[3]); // San Fransisco
  console.log(cities[4]); // Pittsburg

  /**
   * Changing array values
   */
  cities[4] = 'Santa Clara';
  console.log(cities);

/**
 * Getting Array size
 */
 console.log(cities.length); // 5