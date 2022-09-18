console.log('------------------- Functions ------------------->>>>>>>');

function add(x, y) {   // Basic Function call 

     console.log(x + y); }
 add(2, 3);
  
const fun = function x() {   // Function Expression -1
     console.log('Inside x');
 }
fun();
  
const fun2 = function () {   // Function Expression -2
     console.log('Inside x');
 }
fun2();
 
console.log('------------------- Arrow Functions ------------------->>>>>>>'); 

const fun3 = ()=> {
   console.log('Inside Fun');
 }
fun3();

const squareRoot = (num) => {
  Math.sqrt(num);
}
squareRoot(16);
 
const squareRoot2 = num => {
  Math.sqrt(num);
}
squareRoot2(16);


console.log('---------Implicit return arrow functions ---------------->>>>>>>'); 

const squareRoot3 = num => Math.sqrt(num);
squareRoot3(16);

// Activity -1 window object will come in this keyword || this keyword in array function referes to window object it does not point to current object, well it is not a good practice 
 const car = {
    name: "Audi",
     price: 1000000,
    startCar: ()=>{
        console.log(this);
        console.log(this.name);
    }
 };
 car.startCar();

// Activity -2
const a = () => {//ARROW function
  console.log('A FUNCTION:- ' + JSON.stringify(this));
  const b = () => {
    console.log('B FUNCTION:- ' + this);
  }
}

function hello() {//REGULAR function
  console.log(arguments)
  console.log('HEELOFUNCTION:- ' + this);
  childHello()
  function childHello() {
    a();
    console.log('CHILD-HELOFUNCTION:- ' + this);
  }
}

hello();

// Activity -3
const calc = (type, operands) => {
  switch (type) {
    case 'sum': {
      let result = 0;
      for (let operand of operands) {
        result += operand;
      }
      return result;
    }

    case 'sub': {
      let result = 0;
      for (let operand of operands) {
        result -= operand;
      }
      return result;
    }

    case 'mul': {
      let result = 1;
      for (let operand of operands) {
        result *= operand;
      }
      return result;
    }

    case 'div': {
      let result = 0;
      return operands[0] * operands[1]
      return;
    }
    default:
      console.log("Pass valid operation");
      return;
  }

}

console.log(calc('sum', [2, 4, 6, 10]));

// Activity -4(prerequisite - Array & callback)


const ages = [43, 24, 37, 28, 49, 68, 63, 21, 61, 79];
// case study - forEach does not return anything
console.log(ages.forEach(function(ele, index) {
  if (ele >= 60) {
    return ele;
  }
}));

// solution 
const canRetire = (age, idx) => {
  return age >= 60;
}
console.log(ages.find(canRetire)) //FIND return the first element
console.log(ages.filter(canRetire)) //FILTER return the all elements

// note : find & filter works only with array.