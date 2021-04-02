var age = 25; // Number
var name = "Aman"; // String
var developer = true;// Boolean
var location = null; // Null
var task; // undefined
//  let:-
let age = 25; // Number
let name = "Aman"; // String
let developer = true;// Boolean
let location = null; // Null
let task; // undefined
let age= 50;
console.log(age); // SyntaxError: identifier "age" has already been declared.
// Const:-
const age = 20; 
const job = 'developer';
const name; // SyntaxError: missing initializer
const num = 10;
num = 20; //Compiler Error: Cannot assign to 'num' because it is a constant or read-only property
// -----------------------------------------------------------------------------------------------


const ownersName = 'JayKishan';
// ownersName = 'JAy'; // Cannot do this (error)
console.log(ownersName);
const fruit = 'Orange';

{
 let city = 'Rampur';   
 city = 'Kolkata';
 console.log(city);
}
console.log(city);


