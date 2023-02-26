/**
 *  JavaScript - Arrays One-Dimensional - Looping Trought Arrays
 *  author: Joshuép Jr.
 */

 // We can also loop through each element of the array

 // create an array
 const countries = ['USA', 'Canada', 'Colombia'];

 // Looping through array with for loop
 for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    console.log("Element: ["+(index) + "]: ["+element+"]");
 }
 

 // create an array
 const ages = [24, 15, 18];

 // Looping through array using for-each loop
 ages.forEach(element =>{
    console.log(element); // 24, 15, 18
 });




