// Console.log():-
console.log('Aman Bhardwaj');  
console.log(1); 
console.log(true); 
console.log(null); ;  
console.log([1, 2, 3]); // array inside log
console.log({name:"Aman", language:"JavaScript"}); // object inside log

// Console.table ():-
console.table({name:"Aman", language:"JavaScript", part:1});

// Console.assert():-
console.assert(0>1, "Expression is false")

// Console.warn():-
console.warn("This is a warning");

// Console.clear():-
console.clear();

// Console.time() and Console.timeEnd():-
console.time();
for (i = 0; i < 100; i++) {
  //  Program
}
console.timeEnd();

// Console.error():-
console.error("This is a simple error");

// Console.count():-
for (i = 0; i<4; i++) {
  console.count(i);
}
