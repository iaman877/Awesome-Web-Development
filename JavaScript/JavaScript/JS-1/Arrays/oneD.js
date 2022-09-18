// Arrays
      let ui = new Array();
      let uii = [];
        // Accessing array elements
              let arr = ['first element', 'second element', 'last element']
              console.log(arr[0]) // output ' first element'
              console.log(arr[1]) //  output ' second element'
              console.log(arr[arr.length - 1]) //  output ' last element'

        // Length of an Array:- 
              let a2 = [33,55,67,18]
              console.log(a2.length)

        // indexOf():- 
              let std = ["Mark", "John", "Jonas", "Jack"];
              let a = std.indexOf("John");

        // sort(): 
              let s_age= age.sort(a2) //18,33,55,67

        // reverse(): 
              let r_age= age.reverse(a2) //18,67,55,33

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

console.log('--------Some other facts related to array -------------------->');
        var arr1=[1, 'one', true, {}]//VALID but Not reco
        var myArr=[];//declaration
        var num=[1,2,3,4,5]//d+in
        var arr1=new Array();
        console.log(num.length); //count number of elements
        num[2]='three';
        num[10]='TEN';
        console.log(num.length)//[ 1, 2, 'three', 4, 5, <5 empty items>, 'TEN' ]
        const friuts=[{name:'Mango', isSeasonal:true},
                       {name:'Berry', isSeasonal:false} ,
                       {name:'Grapes', isSeasonal:true},
                       {name:'Banana', isSeasonal:false},
                       {name:'PineApple', isSeasonal:false},
                       {name:'Avocado', isSeasonal:false}];
        for (let i=0; i<friuts.length; i++) 
        {
          if(!friuts[i].isSeasonal){
           continue; 
          }
          console.log(friuts[i])
        }
console.log('---------------- FOREACH ------------------->');

      friuts.forEach(function(element, index){ // it is limited to array only
        console.log(element)
      })

console.log('----------- slice &  splice ------------------->');

      var roman=['I', 'II', 'III','IV', 'V', 'VI' , 'VII'];
      console.log(roman.slice(-4));//STARTINDEX, ENDINDEX(ELEMENT EXCLUDED)
      console.log(roman.length);
      console.log(roman.splice(-2));//STARTINDEX,COUNT(HOW many elements) 
      console.log(roman.length);


console.log('--------------  sort function ------------------->');

    var unSortedNum=[53,93,17,49,09,23]; // Imp
    var unsortedChar=['b','d','c', 'a', 'e']
    console.log(unsortedChar.sort())// based on ASCII SORT
    var array=['I', 'II', 'III','IV', 'V', 'VI' , 'VII'];

console.log('-------------- Destructuring ------------------->');
 
    let firstChar=array[0];
    let secondChar=array[1];
    const [firstnum, second]=array;
    console.log(firstnum, second)

console.log('-----------------join----------------------->')
    var num=['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'];
    console.log(num.join('$*$'));  //JOIN works with Array and Returns a String



    function ascendingOrder(arr) {
      return arr.sort(function(a, b) {
         console.log(`value of a = ${a} and value of b = ${b}`)
        return a - b;
      });
    }
    console.log(ascendingOrder([1, 5, 2, 3, 4]));

console.log('---------REST PARAMETER and SPREAD OPERATOR--------------------->')
      var array1=['One', 'Two', 'Three', 'Four'];
      const anotherArr= ['FIVE', 'SIX', 'SEVEN']
      console.log(array1.concat(anotherArr));
      console.log([...array1, ...anotherArr]);
      function sampleData(first, second,...args){//REST PARAM
      console.log(args);
}
