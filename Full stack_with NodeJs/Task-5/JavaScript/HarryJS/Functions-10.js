      if(1){
          let i =234;
          console.log(i)
      }
      console.log(i);

      function ui(name)
      {
          let i = 9;
          console.log(i);
          return `This is a ${name} ui`;
      }

console.log(ui("harry"), i)
// ---------------------------  Another Way to use function --------------------------
var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break; // this is not necessary
    case "subadmin":
      return `${name} is sub-admin with access to create and delete courses`;
      break;
    case "testprep":
      return `${name} is a test prep with access to create and delete tests`;
      break;
    case "user":
      return `${name} is a user to consume content`;
      break;

    default:
      return `${name} is a trial user`;
      break;
  }
};

console.log(getUserRole("hitesh", "testprep"));
var getRole = getUserRole("sammy", "user");
console.log(getRole);


