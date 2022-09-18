console.log('-----------> REGEX')
/*  --->PATTERN/modifier

.: Any character
?: Makes the previous character optional
\w: A word character
\W: A non-word character
\d: A digit
\D: A non-digit character
\s: A whitespace character
\S: A non-whitespace character
\b: A match at the beginning/end of a word
\B: A match not at the beginning/end of a word
\0: A NUL character
\n: A new line character
\f: A form feed character
\r: A carriage return character
\t: A tab character
\v: A vertical tab character
test():- This method tests for a match in a string. It returns true or false. Here is an example:
match():- This method will return an array containing all of the matches, including capturing groups, or null if no match is found
test & match is recommanded
//REFRENCE--> https://regex101.com/
*/
const string1 = 'Code with Aman';
const string2='abc@xyz.com';  //STRING@STRING.STRING
const regex1 = /a/
const regex2=/\S+@\S+\.\S/  // + represent concatination
const number='123456';  
const numberRegex=/\d/
console.log(regex1.exec(string1)); // [ 'a', index: 12, input: 'Code with Aman', groups: undefined ]
console.log(regex2.test(string2)); // true
console.log(string2.match(regex2)); // [ 'abc@xyz.c', index: 0, input: 'abc@xyz.com', groups: undefined ]
 