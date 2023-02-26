/**
 *  JavaScript - Arrays One-Dimensional - Methods
 *  author: Joshuép Jr.
 */

 /**
  * ============================
  *   Adding Array Elements
  */

/**
 * .unshift() method
 * To add an new element to the beginning, you use the .unshift() method
 */

 let seas = [
    'Black Sea', 
    'Carinbbean Sea', 
    'North Sea', 
    'Baltic Sea' ];
 
 let toAdd = 'Red Sea';
 console.log('Element to add: ', toAdd);
 
 seas.unshift(toAdd);
 console.log(seas);
 
 /**
  * .push() method
  * To add an new element you use .push() method.
  */
 toAdd = 'American Mediterranean Sea';
 console.log('Element to add: ', toAdd);
 seas.push(toAdd);
 console.log(seas);

 /**
  * =============================
  *      Removing elements
  */

 /**
 * shift() method
 * To remove an element from the beginning of an arrat, you use the .pop() method
 */
 let toRemove = seas.shift();
 console.log('Element to remove: ', toRemove);
 console.log(seas);
 
 /**
 * pop() method
 * To remove an element from the end of an arrat, you use the .pop() method
 */
 toRemove = seas.pop();
 console.log('Element to remove: ', toRemove);
 console.log(seas);

 /**
  * ======================
  *     Merging Arrays
  */

 /**
 * concat() method
 * The concat method creates a new array by merging existing arrays.
 * It does not change the existing arrays. It always returns a new array.
 */
 let backEnd = ['Python', 'DDBB', 'C#', 'Java', 'Nodejs'];
 let frontEnd = ['Html & Css', 'JavaScript', 'React'];

 console.log('Back End Array: ', backEnd);
 console.log('Front End Array: ', frontEnd);
 
 let fullStack = backEnd.concat(frontEnd)
 console.log('Fullstack Array: ', fullStack);

 /**
  * ===============================================
  *   Finding an index of an element in the array
  */
 
 /**
  * indexOf() method
  * To find the index of an element, you use the .indexOf() method
  */
 let toFind = 'Java';
 let index = backEnd.indexOf(toFind);
 console.log("Index of [" +toFind+ "] -> [" + index+"]");

 toFind = 'JavaScript'
 index = fullStack.indexOf (toFind);
 console.log("Index of [" +toFind+ "] -> [" + index+"]");

 /**
  * Chaking if a value is an array
  */

 /**
  * Array.isArray() method
  * To check if a value is an array, you ise Array.isArray() method
  */
 let user;
 console.log(Array.isArray(fullStack)); // true
 console.log(Array.isArray(user)); // false