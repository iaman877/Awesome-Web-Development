![image](https://user-images.githubusercontent.com/49730521/145207997-d36e70aa-db9f-4b14-86ff-5fea03a20b9d.png)
```
var city = 'Delhi;
{
 let city = 'Rampur';   
 city = 'Kolkata';
 console.log(city);
}
console.log(city);
Output : 
Kolkata
Delhi // this is because let can be accessible only in block, we can update inside it also
// it is good practice to use let and const in our code
```
