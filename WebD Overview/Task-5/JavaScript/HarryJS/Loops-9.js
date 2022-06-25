// for Loop
      var person = {name: "Aman", language: "JavaScript", age: 21}; // Loop through all the properties in the object  
      for(var i in person) {  
      console.log( i + " = " + person[i]); 
      }
// forEach Loop
      const  alpha = ['a', 'b', 'c'];
      for (let i = 0; i < alpha.length; i++) {
      console.log(alpha[i]);
      }
// while loop:-
      let i = 1, n = 100;
      while (i <= n) {
          console.log(i);
          i += 1;
      }
// do...while loop
      let i = 1;
      let n =100;
      do {
          console.log(i);
          i++;
      } while(i <= n);
//Breaking a Loop
      for (let i = 0; i < 100; i++) {
       console.log(i);
          if (i == 90) {
              break;
          }
      }
// Skipping an Iteration:-
      let i = 10;
      for (let x = 1; x <=i; x++) {
          if (x == 5) {
              continue;
          }
      }
