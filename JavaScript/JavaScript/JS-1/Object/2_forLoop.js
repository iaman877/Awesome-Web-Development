//  ----------   Iteration Using For in Loop 
const person={
  'firstname':'john',
  'age':40,
  'address': {
    'street':'4th lane',
    'building': 'xyz towers',
    'city':'newyork',
    'pincode':124456
  }
}
console.log(person.hasOwnProperty('lastname'));
console.log(Object.keys(person));

for(let i in person){
if(typeof person[i] =='object'){
  for(let x in person[i]){
  console.log(`KEYNAME:- ${x} AND VALUE:- ${person[i][x]}`)
  }
}
  else {
  console.log(`KEYNAME:- ${i} AND VALUE:- ${person[i]}`)
    
  }
  
}

//  ----------   Iteration Using For of Loop 

const dog = {
    name: "Cooper",
    age: 3,
    bark: function () {
        console.log("BORK BORK");
    }
};
console.log(Object.entries(dog))
 delete dog.bark;
for(const [key,value] of Object.entries(dog)){
  console.log(`KEYNAME:- ${key} AND VALUE:- ${value}`)
    
}
