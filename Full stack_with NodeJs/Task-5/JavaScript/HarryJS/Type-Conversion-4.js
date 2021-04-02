// Explicit Conversion:-

          // Number Conversion:-
                    let res;
                    res = Number('100'); // string to number
                    console.log(res); // 100
          // boolean to number
                    res = Number(false);
                    console.log(res); // 0
                    res = Number(' ')
                    console.log(res); // 0
                    res = Number('hello');
                    console.log(res); // NaN
                    res = Number(undefined);
                    console.log(res); // NaN
          // Boolean Conversion
                    res=Boolean(1); // true
                    res= Boolean(0); // false
                    res= Boolean("hello"); // true
                    res= Boolean(""); // false
          // String Conversion
                    let res
                    let a=90
                    res= String(a) // returns a string from a number variable a
                    String(378009) // returns a string from a number literal 378009
                    a.toString() 
                    (378009).toString()
          // parseInt and parseFloat:
                  console.log( parseInt('$100 dollars') ); // NaN
                  console.log( parseInt('+10.25990 kg') ); // 10
                  console.log( parseFloat(' +10.25 kg') ); // 10.25
                  console.log( parseFloat('ABC’)); // NaN
                                          
// Implicit Conversion:-
          // Conversion To String
                  let res;
                  res = '3' + 4; 
                  console.log(res) // "34"
                  res = '9' + true; 
                  console.log(res); // "9true"
                  res= '0' + null; 
                  console.log(res); // "0null"
           // Conversion To Number
                  let res
                  res = '4' - '4'; 
                  console.log(res); // 0
                  res = '4' * 5;
                  console.log(res); // 20
           // Boolean Conversion to Number:
                  let res;
                  res = '5' - true;
                  console.log(res); // 4
                  res = 10 + false;
                  console.log(res); // 10
res = 4 + null; // 4
res = 4 - undefined;// NaN
                        
