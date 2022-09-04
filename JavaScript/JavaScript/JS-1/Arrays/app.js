//Basic Array Methods

let fruits = ["Apple", "Guava", "Papaya", "Litchi"];

// push

// fruits.push('Grapes')
fruits.push('Grapes', 'Mango');   // console.log(fruits);

// pop-----------------------------------------

let popedFruit = fruits.pop();   // console.log(popedFruit);  console.log(fruits);

// shift-----------------------------------------

let shiftedFruit = fruits.shift();  // console.log(shiftedFruit); console.log(fruits);

// Unshift------------------------------------

// fruits.unshift('Strawberry')
fruits.unshift('Strawberry','Pineapple');  // console.log(fruits);


// More array methods

// concat

let arr1 = [1, 2, 3, 4];
let arr2 = ['blue', 'green', 'orange'];

// let arr3 = arr1.concat(arr2);
let arr3 = arr2.concat(arr1);
console.log(arr3);

// array & call back function 

var isEven = (element) => 
{
  return element % 2 === 0;
};                          

/*
var result = [2, 3, 6, 8].every(isEven);
console.log(result);
*/

var result = [2, 3, 6, 8].every((e) => (e % 2 === 0));
console.log(result);

// ------------------------- splice() and Filter ------
var testArray = [2, 4, 6, 3, 1, 5, 9, 8]; //console.log(testArray.fill("empty"));
const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];
const result = myNumber.filter((num) => num > 55);  //console.log(result);
var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

// console.log(users.slice(1));
users.splice(1, 3, "HI");
users.splice(1, 3, "HI", "BYE");
users.splice(); // console.log(users);

