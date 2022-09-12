const person={firstname:'Aman', lastname:'Bhardwaj'};
let varfirstname=person.firstname;
let varlastname=person.lastname;
console.log(`PRINTING values from fresh declaration:- ${varfirstname} ${varlastname}`);

const {firstname, lastname}=person;
console.log(`PRINTING values from destructuring declaration:- ${firstname} ${lastname}`);

const user = ["Alberto", "Rodrigo", 25, "Male"];
const [, userlastname, age, gender]=user;
console.log(`${userlastname} ${age} ${gender}`);



var myObj=
{
  'sports':'this is sports',
  'music':'this is music',
  'food':'this is food'
}

var person ={
  name:'Help',
  age:20,
  isAdult:true,
  skills:['HTML', 'CSS', 'JS']
}

var anotherObj=myObj;//PASS BY REFERENCE
var anotherNewObj=Object.assign({}, myObj)


anotherNewObj['food']='This is awesome food';
console.log(myObj['food'])
console.log(anotherNewObj['food'])

