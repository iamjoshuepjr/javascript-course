/**
 *  JavaScript String Concatenation
 *  author: Joshuép Jr.
 */


// ================ String Concatenation ================ 
// We use the (+) sign to string concatenation, when the value are strings

var name = "Josué ";
var lastname = "Pimienta";
var nickName = "Joshuép Jr."
var ocupation = "Software Engineering Student";

var fullName = name + lastname;
console.log("Hi!, I'm " +fullName+ ", I'am a "+ocupation);
console.log(name +" "+ lastname);

// ========== How works strings with numbers? ========== 
// Evaluation left to right

var string = name + 2 + 3;
console.log(string)

string = name + (2 + 3);
console.log(string)

string = 4 * 3 + lastname;
console.log(string)