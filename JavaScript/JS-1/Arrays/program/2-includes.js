
/*

In JavaScript, includes() method determines whether a string contains the given characters within it or not. This method returns true if the string contains the characters, otherwise, it returns false. 
Note: The includes() method is case sensitive i.e, it will treat the Uppercase characters and Lowercase characters differently.
Syntax:  string.includes(searchvalue, start)

*/

const numbers = [1, 2, 3, 4]; 

console.log(includes(numbers, -1));

function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement)
      return true;
  return false;
}
