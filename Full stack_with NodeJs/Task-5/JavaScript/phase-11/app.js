/* 
Basic Function call 

function add(x, y) {
     console.log(x + y); }
 add(2, 3);
*/


/*  
Function Expression -1

const fun = function x() {
     console.log('Inside x');
 }
fun();
/*  

/*  
Function Expression -2

const fun = function () {
     console.log('Inside x');
 }
fun();
*/ 

// ------------------------- Arrow Functions -----------------------------
/* 
const fun = ()=> {
   console.log('Inside Fun');
 }
fun();
*/ 

/* 
const squareRoot = (num) => {
  Math.sqrt(num);
}
squareRoot(16);
*/

/* 
const squareRoot = num => {
  Math.sqrt(num);
}
squareRoot(16);
*/

// Implicit return arrow functions
const squareRoot = num => Math.sqrt(num);
squareRoot(16);


// const car = {
    name: "Audi",
     price: 1000000,
    startCar: ()=>{
        console.log(this);
        console.log(this.name);
    }
 }
 car.startCar();
// window object will come in this keyword || this keyword in array function referes to window object it does not point to current object, well it is not a good practice 



