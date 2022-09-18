//SCOPE and Lexical scope using closure
// Activity -1 
var gv="Gloabl Value"
function parent()
{
  var pv="Parent value"
  return child;
  function child ()
  {
     var cv="Child Value";
     return 'Global:-' + gv + ' Parent:-' + pv + ' Child:-' + cv;
  }
}

console.log(parent());
console.log(parent()());

// Activity -2 

var person={
  name:"Brad Pitt",
  age:56,
  phone:1122334455,
  printDetails: function(){
   console.log(`Name:- ${this.name}, Age:- ${this.age}, Phone:- ${this.phone}`);
   getName= function(){
      console.log(`PrintingName:- ${this.name}`);
    }
    getName.apply(this)
  }
}

 console.log(person.printDetails())