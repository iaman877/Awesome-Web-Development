//if condition:-
      if( 5 > 0){
      console.log("5 is greater than 0");
      }
      if( 5 < 0){
      console.log("5 is less than 0");
      }
// else condition:-
      let salary = 500;
      if( salary > 1000)
      {
      console.log("My Salary is greater than 1000");
      }else{
      console.log("My Salary is less than or equal to 1000");
      }
// else if condition:
      var salary = 500;
      if( salary > 1000)
      {
      console.log("My Salary is greater than 1000");
      }
      else if(salary < 1000){
      console.log("My Salary is less than 1000");
      } else{
      console.log("My Salary equal to 1000");
      }

// Switch Statement:
const age = 128;
switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}   
// -----------------------------------------------  If -----------------------------------
var email = true;
var facebook = false;
var google = true;

if (email || facebook || google) {
  console.log("Login Success");
}
// --------------------------------------------- Switch ----------------------------------
var user = "admin";

switch (user) {
  case "admin":
    console.log("You get full access");
    break;
  case "subadmin":
    console.log("gets access to create/delete courses");
    break;
  case "testprep":
    console.log("gets access to create/delete tests");
    break;
  case "user":
    console.log("gets access to consume content");
    break;
  default:
    console.log("Trial user");
    break;
}
