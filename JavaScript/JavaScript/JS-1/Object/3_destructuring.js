const person={firstname:'Aman', lastname:'Bhardwaj'};
let varfirstname=person.firstname;
let varlastname=person.lastname;
console.log(`PRINTING values from fresh declaration:- ${varfirstname} ${varlastname}`);

const {firstname, lastname}=person;
console.log(`PRINTING values from destructuring declaration:- ${firstname} ${lastname}`);

const user = ["Alberto", "Rodrigo", 25, "Male"];
const [, userlastname, age, gender]=user;
console.log(`${userlastname} ${age} ${gender}`);