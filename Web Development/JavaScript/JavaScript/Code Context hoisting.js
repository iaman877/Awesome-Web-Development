/*
Execution context
 1. Variable Object 
 2. Scope Chain
 3. this
 */
// Below code will not give any error, function declaration are scanned and made available 
tipper("80");
function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}
// Below code will not give any error, function declaration are scanned and made Undefined
bigTipper("200");
var bigTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 15);
};
// or 
console.log(name);
var name = "hitesh";
// ----------------------------------- Scope chaining --------------------------------
var name = "AMan";

console.log("Line number 25", name);

function sayName() {
  var name = "Mr. H";
  console.log("Line number 29", name);
  sayNameTwo();

  function sayNameTwo() {
  //  var name = "Mr. HC";
    console.log("Line number 34", name);
  }
}
sayName();

//--------- this keyword
console.log(this);

var game = "basketball";

// function sayName() {
//   var name = "Hitesh";
//   console.log(this);
// }

// sayName();
//----------------------------------------

console.log(this);

var user = {
  firstName: "Hitesh",
  courseCount: 4,
  getCourseCount: function () {
    console.log("LINE 7", this);
    function sayHello() {
      console.log("Hello");
      console.log("LINE 10", this);
    }
    sayHello();
  },
};

user.getCourseCount();
