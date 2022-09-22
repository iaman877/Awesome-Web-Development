console.log("-----------IIFE-IMMEDIATELY INVOKED FUNCTION EXPRESSION------>")
let num1=5;
let num2=10;
(function(...args){
  console.log(`Sum of ${args[0]} +  ${args[1]} is ${args[0]+args[1]}`);
})(10, 20)

console.log("-----------IMAP----------------->")

var fruits=["Banana", "Apple","Kiwi", "Grapes", "Avocado", "Berries", "Sitafal","Mongo"];

/* task
["My Fav frruit is Banana", " My Fav frruit is Apple"," My Fav frruit is Kiwi", " My Fav frruit is Grapes", " My Fav frruit is Avocado", "My Fav frruit is  Berries", "My Fav frruit is  Sitafal","8Mongo"]
*/

const sayFavFruit=fruits.map(function(ele,idx){
  return "May Fav fruit is "+ele
});


var arr=[1,2,3,4,5,6,7,8,9,10]
// task - [2,4,6,10,12,14,16,18,20]

const convertedToEven=arr.map(function(item, index){
  return 2*item;
})
console.log(convertedToEven);



console.log("-----------------reduce-------------------->")
/*
task
suppose user have two arrays [1,2,8,5] and [66,11,44,33] how to get largest number by map
Input==> Two array[1,2,8,5] [66,11,44,33]
output==> 66
*/

let numArr = [5, 2, 67, 37, 85, 19, 10];
const total=numArr.reduce(function(accumlator, current){
  return accumlator+current;//74+37, acc= 74, curr=37
},0)
const largestNum=numArr.reduce(function(acc, curr){
  return Math.max(acc, curr)
})


let employees=[
  {name:'John', salary:10000},
  {name:'Brad', salary:25000},
  {name:'Noddy', salary:15000},
  {name:'June', salary:12000},
  {name:'James', salary:5000},
]
//GetAllSpending

const spending=employees.reduce(function(acc,curr){
  return acc+curr.salary;
},0)



var multiDArr=[[2,5], [1,3], [7,9],[5,0]]
//Return TYPE-->ARRAY

const flatArr=multiDArr.reduce(function(a,c){
  return a.concat(c);
},[])


console.log("-----------------Error Handeling -------------------->")

// task -1
//how do we compare when two arrays have same values are not.
var array2=[2,4,7];
//[TODO] to check any length between two arrays
try{
if(array1.length > array2.length){
  let [array1, array2]=[array2, array1];
}

const difference=array2.filter(function(ele,index){
 return !array1.includes(ele);
})
console.log(difference)
  
}
catch(error){
  console.log(error.message)
}


// task -2

try {
let result=false;
if(array1.length == array2.length){
for(let i=0;i< array1.length;i++){
  result=array2.indexOf(array1[i]) !== -1;
  if(result==false){
    break;
  }
}
}

console.log(result?"Duplicate":"Not Duplicate");
}catch(error){
  console.log(error.message)
}
finally {
  //CODE that always execute regardless of an exception, example logs
}
