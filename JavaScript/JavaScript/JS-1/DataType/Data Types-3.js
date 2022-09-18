console.log('-------- Primitive data types----------->')

// String
      let name = "Aman";
      console.log("My string is " + name);
      console.log("Data type is " + (typeof name));

// Numbers
      let marks = 34.4;
      console.log("Data type is " + (typeof marks));

// Boolean
      let isDriver = true;
      console.log("Data type is " + (typeof isDriver));

// Null
      let nullVar = null;
      console.log("Data type is " + (typeof nullVar));

// Undefined
      let undef = undefined;
      console.log("Data type is " + (typeof undef));

console.log('-------- Reference Data Types----------->')

// Arrays
      let myarr = [1, 2, 3, 4, false, "string"];
      console.log("Data type is " + (typeof myarr));

// Object Literals
      let stMarks = {
          harry: 89,
          Shubham: 36,
          Rohan: 34
      }
     console.log( typeof stMarks);
      function findName() {}
      console.log(typeof(findName));
      let date = new Date();
      console.log( typeof date);

console.log('--------Math Functions & Constants----------->')

      var phone='402345679'
      var num1='2';
      var num2='two';
      var sum1=parseInt(num1)+parseInt(phone)  // 402345681
      var sum2=parseInt(num1)+parseInt(num2)   //   NaN
      var sum3=0+phone;
      console.log(typeof(sum3) +" "+ sum3); // string 0402345679
      Math.round(2.50)       //3
      Math.ceil(2.00000001)  //3
      Math.floor(2.999999)   // 2
      Math.pow(3,3)          //27
      Math.sqrt(3)           //1.732
      'a'.charCodeAt(0)      // 97

