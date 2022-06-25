## For reading in a file 
```
const fs = require('fs');

fs.readFile(F1, {
    encoding: 'utf-8',
    flag:'r'
}, (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
})

```
## For Writing in a file 

```
const fs = require('fs');

const data = Hello from File System

 fs.writeFile(abc.txt, data, {
     encoding: 'utf-8',
     flag: 'w'
 }, (err) => {
     if (err) {
     throw err;
     }
     console.log("File Written Successfully");
 });

```
## Intro to path.join
![image](https://user-images.githubusercontent.com/49730521/125244884-7d3a8800-e30d-11eb-8939-5d80c7ffac93.png)
> Imp : Difference between process.pwd() & __dirname
> 

## If we want to store our output in a particualr locartion or directory
```
const fs = require('fs');
const path = require('path');

const F1 = path.join(__dirname,'files','msg.txt');
const msg = "Leave me alone I hate u plzzz";
fs.readFile(F1, {
    encoding: 'utf-8',
    flag:'r'
}, (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
})
```
![image](https://user-images.githubusercontent.com/49730521/125246100-f71f4100-e30e-11eb-94b9-83ea78acfc2f.png)
