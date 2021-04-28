  # Topics Covered 
  1. 'https://document.mozella.org/en_vs/search?q=rgb' where https is protocol, '/document.mozella.org/en_vs/search?' = vase url, 'q=rgb' = querry parameter
  2.  Nodemon - nodemon is a tool that helps develop node.js by automatically restarting the node application when file changes in the directory are detected
      1. npm init => npm i nodemon 
      2. Go to package.json then change Script part = "start": "nodemon ./index.js" 
  3. Template Engines for Node.js
     1. ![image](https://user-images.githubusercontent.com/49730521/116339963-fbea5380-a7fb-11eb-8c1c-9affd40e68ea.png)
     2. Exmples - EJS, Handlebars, Jade,Nunjuck 
     3. When we installing ejs template a folder name "view" is created automatically.
  4. EJS-  EJS is a simple templating language that lets you generate HTML markup with plain JavaScript
     1. NO need to Require in Index.js but we need to configure it using 'app.set('view engine','ejs');'
     2. How to pass any variable,object,array from index.js to home.js
     3. Code Snipped 
       ```
             const path = require('path');
             app.set('view engine', 'ejs');
             app.set('views', path.join(__dirname, '/views'));
             const product = 
             {
                 img: 'https://images.unsplash.com/photo-1517430868310-0bc91ef7d89a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                 name:'Laptop',
                 price: '200',
                 desc:'The general rendering process of Pug is simple. pug.compile() will compile the Pug source code into a JavaScript function that takes a data object (called “locals”) as an argument.
             }
             app.get('/home', (req, res) => {
             res.render('home',{product})
             })
             app.get('/rand', (req, res) => {
             const num = Math.floor(Math.random() * 10 + 1);
              res.render('random',{randomNum:num,todos});
             })
             app.listen(3000, () => {
              console.log('server started at port 3000');
             })
       ```
5. like view directory, there is one 'public' directory which is used to stored static files like HTML, CSS, JS etc.
   1. Note - Configure 'view','public' dir in index.js & link 'css stylesheet','js script' in Home.ejs
6. Partials : If want to same code in many files then we diractly call respective directory by ejs tags Examp: <%-include("partials/header") %> 


   
