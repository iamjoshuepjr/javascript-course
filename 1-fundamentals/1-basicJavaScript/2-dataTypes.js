/**
 *  JavaScript Data Types
 *  author: Joshuép Jr.
 */

/**
 * JavaScript has the primitive data types: (null, undefined, boolean, number, string, symbol, biginit) and complex data types: (objects)
 */

// ======= STRINGS ==========
// typeof + variable -> display only variable's data type           

var nickame = "Joshuép Jr.";
console.log("Name: " + nickame);
console.log("Type of data: " + typeof nickame);

// using backslash to escape
var message = 'I\'m also a valid string';
console.log("Message: "+ message);

// ========= NUMBERS ========= 
// int
var age = 24;
console.log("Age: " +age+ " years old");
console.log("Type of data: " + typeof age);

// float
var temperature = 8.00;
console.log("Temperature: " +temperature+ " C°");
console.log("Type of data: " +typeof temperature);

//  ========= OBJECTS ========= 
var contact = {
    name : "Josué",
    lastname : "Pimienta",
    ocupation : "Student",
    phone : 3017514279,
    email: 'address@something.com',
    address: {
        building: '5000',
        street: 'North 1st street',
        city: 'San José',
        state: 'CA',
        country: 'USA'
    }
}

// ========= Accesing to object's properties  ========= 
// ========= form 1 to display object's properties ========= 
console.log("Name: " +contact.name);

// ========= form 2 to display object's properties ========= 
console.log("Last Name: " +contact['lastname']);

// ========= Displaying the whole object  ========= 
console.log(contact);
console.log("Type of data: " + typeof contact);

// ========= Booleans ========= 
var decition = true;
console.log(decition);
console.log(typeof decition);

// ========= Function ========= 
function myFunction(){}
console.log(myFunction);
console.log(typeof myFunction);

// ========= Symbol ========= 
// Unique values
var symbol = Symbol("This is my symbol");
console.log(symbol);
console.log(typeof symbol)

// ========= Biginit ========= 
let pageView = 9007199254740991n;
console.log("Page View: "+pageView);
console.log(typeof(pageView));

// ========= class -> it's a function too  ========= 
class Person {
    constructor(name, lastname){
        this.name = "Joshuép Jr.";
        this.lastname = "Pimienta";
    }
}

console.log(Person);
console.log(typeof Person);

// ========= Undefined ========= 
var var1; // this variable is undefined
var var2 = undefined;

// here it's a value
console.log(var1);
console.log(var2);

// here it's a data type
console.log(typeof var1);
console.log(typeof var2);

// ========= Null -> Without a value / and it's an object ========= 
var yyyy = null;
console.log(yyyy);
console.log(typeof yyyy)

// ========= Arrays ========= 
var cars = ['Mercedes Benz AMG', 'Jeep', 'Audi', 'Toyota'];
console.log(cars);
console.log(typeof cars);

// ========= Empty values  ========= 
var emptyValue = "";
console.log(emptyValue)
console.log(typeof emptyValue);