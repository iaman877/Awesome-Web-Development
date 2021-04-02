// Arrays
      let arr = new Array();
      let arr = [];
        // Accessing array elements
              let arr = ['first element', 'second element', 'last element']
              console.log(arr[0]) // output ' first element'
              console.log(arr[1]) //  output ' second element'
              console.log(arr[arr.length - 1]) //  output ' last element'

        // Length of an Array:- 
              let age = [33,55,67,18]
              console.log(age.length)

        // indexOf():- 
              let std = ["Mark", "John", "Jonas", "Jack"];
              let a = std.indexOf("John");

        // sort(): 
              let age = [33,55,67,18]
              let s_age= age.sort(age) //18,33,55,67

        // reverse(): 
              let age = [33,55,67,18]
              let r_age= age.reverse(age) //18,67,55,33

        //concat(): 
              let alpha = ["a", "b", "c"];
              let numeric = [1, 2, 3];
              var alphaNumeric = alpha.concat(numeric); // a,b,c,1,2,3

        // Here are some methods which are used to modify an array. Remember that, when we modify an array, we are modifying the original array.

        // push():
              let fruits = ["Banana", "Orange", "Apple"];
              let len = fruits.push('Mango') // ["Apple", "Banana", "Orange", "Mango"]

        // pop():- 
              let last = fruits.pop() // remove Mango (from the end) ["Apple", "Banana", "Orange"]

        // shift():- 
              let first = fruits.shift() // remove Apple from the front ["Banana", "Orange"]
        // unshift():- 
              let newLength = fruits.unshift('Strawberry') // add to the front ["Strawberry", "Banana", "Orange"]
        // splice()
              let removedItem = fruits.splice(pos, 1) // this is how to remove an item  ["Strawberry", "Orange"]
//Object:-
      let user = new Object(); // "object constructor" syntax
      let user = {}; // "object literal" syntax

let myobj = {
    'first name': 'Aman', 
    channel: 'AmanTV',
    isActive: true,
    marks: [1,5,3,6]
}
console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.channel)
