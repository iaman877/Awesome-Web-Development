// charAt(c):
      var myString = 'JavaScript!!!';
      console.log(myString.charAt(7));  //output: i

// concat(p1, p2)
      var str1="JavaScript"
      var str2=str1.concat(" is","awesome")
      console.log(str2); //Output: JavaScript is awesome

//indexOf(char/substring)
      var str1="Hi, my name is Sam!";
      var str2 = str1.indexOf("locate"); //Output: -1

// lastIndexOf(substr, [start_from]):
      var myString = 'javascript Node.js';
      console.log(myString.lastIndexOf('N')); //output: 11

// slice(start, [end]):
        var text="programming"
        var mystr= text.slice(0,4)
        console.log(mystr)    //Output:- "prog"

// split(delimiter, limit):
        var txt = "a,b,c,d,e";   // String
        txt.split(",");          // Split on commas
        txt.split(" ");          // Split on spaces

// substring(from, [to]):
        var myString = 'javascript Programming';
        myString = myString.substring(0,10);
        console.log(myString) //output: javascript

// toLowerCase()
        var myString = 'JAVASCRIPT';
        myString = myString.toLowerCase();
        console.log(myString) //output: javascript

// toUpperCase()
        var myString = 'javascript';
        myString = myString.toUpperCase();
        console.log(myString)  //output: JAVASCRIPT

// search(“str”):
       var str = "Welcome to programming World!!";
       var pos = str.search("programming");

// substr()
        var str = "Apple, Banana, Kiwi";
        var res = str.substr(7, 6); // Output: Banana
