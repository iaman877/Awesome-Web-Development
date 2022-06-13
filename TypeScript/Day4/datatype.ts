//any datatype
/*let a:any=10;
var b:any;

a = 10;
a = "String";
a = true;

function test(a:any,b:any){}*/

//unknown datatype
/*
let a:any = 1;
let b:unknown = 1;
let s:string = a;

//a.trim(); //run time error
//b.trim()// editor error/compile error

function multiply(a:unknown,b:unknown ){
    if(typeof a==="number" && typeof b==="number"){
        return a*b;
    }

    return false;
}

console.log(multiply(2,2));
*/

//string datatype
/*let a:string = "Hello";
const b:string = "hi";
let c:"hi"; //Type Literal
c = "hi";*/

//boolean datatype
/*let a:boolean;
a = true;
a= false;
const b:boolean = true;
let c:true;
c = false;
console.log(c);*/


//number datatype
/*let a:number = 1;
let b:number;
b = 1;
b = 1.0
b = -5.5;
//b = "string"
const c:number = 1.0;
let d:1;
d = 1;
d = -1;
d = 1.0;*/


//bigint datatype
/*let a:bigint = 1n;
a = 2n*3n;

let b:number = 1n;
const c:bigint = 999999999999999999999999999999999999n
let d:5n;

d = 1n
*/

//ARRAY
let a = [1,2,3];

let b:string[]=[];
b.push("hello");
//b[1]= true;

let students:string[] = ["Ravi", "Dev", "Amit"];

let c = [1.0, true, "string"];

for(let v of students){
    console.log(v.toUpperCase());
}


//TUPLES
let person:[string,string,number?] = ["Ronit","Mukherjee",1.0];
//person[2] = 1.0;
person.push(1.0);
person.push("string");
//person[4] = "hello";

let man:[number,boolean,...string[]] = [30, true, "Ronit","Amit","Ajay" ]

console.log(man);

if(person[2]){
person[2].toFixed();
}


//READ-ONLY ARRAY and TUPLE
let d: readonly number[] = [1,2,3];
let e: readonly [string,string,number] = ["Ronit","Mukherjee",20];


//ENUM
// const ADMIN = "Admin";
// const PRINCIPAL = "Principal";

enum Role {
    ADMIN="Admin",
    PRINCIPAL = "Principal",
    DIRECTOR = "Director",
}

enum Role {
    SUPERVISOR = "Supervisor"
}

console.log(Role.ADMIN, Role.PRINCIPAL, Role["ADMIN"])

let teacher = {
    name: "Ronit",
    roles: [Role.ADMIN, Role.PRINCIPAL]
}

if(teacher.roles.includes(Role.PRINCIPAL)){
    console.log("Teacher is a principal also");
}



//UNION
let currentPadding = 10;
function addPadding(paddingValue: number | string) {
  if (typeof paddingValue === "string") paddingValue = Number(paddingValue);

  currentPadding += paddingValue;
}

addPadding(10);
console.log(currentPadding);

let arr: (number | string)[] = [1, "String"];

//INTERSECTION
enum Role {
    TEACHER = "Teacher",
    STUDENT = "Student",
    DIRECTOR = "Director"
}

//ALIAS 1
type BaseRes = {
  success: boolean;
  error?: string;
};

//ALIAS 2
type Teacher = {
  age: number;
  exp: number;
};

//ALIAS 3
type Student = {
  class: number;
  subjects: string[];
};

//ALIAS 4
type MainRes = {
    data: Teacher | Student
}

//ALIAS 5
type Res = BaseRes & MainRes;

type ResFor = Role.TEACHER | Role.STUDENT | "director";

let baseRes = {
  success: true,
  error: "",
};


function getResponseFor(resFor:ResFor):Res | undefined {
  let teacher = {
    age: 10,
    exp: 5,
  };

  let student = {
    class: 5,
    subjects: [],
  };

  if (resFor === "Teacher") {
    return { data: teacher, ...baseRes };
  } else if (resFor === "Student") {
    return { data: student, ...baseRes };
  }
}

getResponseFor(Role.TEACHER);

function main(i1:number,i2:number):undefined{
  var x;
  ///Process

  //Error
  //x = i1 + i2;

  return x;
}

function main2(a:number,b:number):void{
  var sum = a +b;
}

function main3(){
  //Process
  throw new Error("SSSS");
}


function main4(){
  // while(true){
  //   let x = 1;
  // }
}

console.log(typeof main4());

