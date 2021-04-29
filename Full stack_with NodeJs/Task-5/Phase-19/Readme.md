# Topics Covered

1. Get Request 
   1. Used to retrieve data 
   2. Data is send via querry string
   3. Information is visible in url
2. Post Request 
   1. Used for posting data to the server 
   2. Usually used to create/write/updated/delete.
   3. Data is send by request body with different formate ex- Json,plan text etc..
   4. it is more secured than Get
3. Get-post-Request 
   1. npm init -y => npm i express ejs nodemon
   2. change "script" part in package.json
4. REST(Representational State Transfer Application) or Restful Routing
   1. [Model + URL] -> Uniquely identify type of request
   2. how to display a list of comment in your blog 
      1. Make an array in index.js
          ```
              const comments = [
                   {
                       username: "Sabeel",
                       body:"This is a comment"
                   },
                   {
                       username: "Cat",
                       body:"Meow Meow Meow"
                   },
                   {
                       username: "Dog",
                       body:"Woof Woof Woof"
                   },
                   {
                       username: "Prateek",
                       body:"Hello from Google"
                   }
                ]
          ```
        2. List all the comments using res.render function we are calling index.ejs with comment object
            ```
               app.get('/comments', (req, res) => {
                res.render('comments/index', { comments });
                })
            ```
  
          
