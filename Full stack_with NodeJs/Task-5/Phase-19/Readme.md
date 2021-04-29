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
                       username: "Aman",
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
                       username: "Prateek mishra",
                       body:"Hello from Google"
                   }
               ]
          ```
        2. List all the comments using "res.render" function so that we are calling index.ejs file with its comment object
            ```
               app.get('/comments', (req, res) => {
                res.render('comments/index', { comments });
                })
            ```
       3. The location of index.ejs is (RestfulRouting/views/comments/index.ejs) and qill look like 
            ```
              <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Index</title>
                        </head>
                        <body>
                            <h1>All Comments</h1>
                            <ul>
                                <%for(let c of comments){%>
                                    <li><%= c.body %> - <strong><%= c.username %></strong> </li>
                                    <a href="/comments/<%=c.id%>">Show</a>
                                    <a href="/comments/<%=c.id%>/edit">Edit</a>
                                <%}%>
                            </ul>
                            <a href="/comments/new">Add New Comment</a>
                        </body>
                        </html>
             ```
   3. how to display & add new comments : we can do this by creation of form
      1. Make a form in new.ejs file, location will be (RestfulRouting/views/comments/new.ejs) 
         ```
                  <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>New</title>
                        </head>
                        <body>
                            <h1>Add New Comment</h1>
                            <form method="POST" action="/comments">
                                <input type="text" name="username" placeholder="username">
                                <br>
                                <br>
                                <textarea name="body" cols="30" rows="5">        
                                </textarea>
                                <br>
                                <br>
                                <button>Save</button>
                            </form>   
                        </body>
                        </html>
         ```
      2. In Index.js write this function
         ```
            app.get('/comments/new', (req, res) => {
                console.log(reg.body);
                res.render('comments/new');
                 })
          ```
      3. You will be noticed in terminal/cmd output of the console.log is Undefined, to solve this problem we use middleware in Index.js(RestfulRouting/views/comments/index.ejs)
         ```
           app.use(express.urlencoded({ extended: true }));
         ```
      4. Now destrucutred req.body and push it to comment array
         ```
            app.post('/comments', (req, res) => {
             const { username, body } = req.body;
             comments.push({ username, body,id });
             res.redirect('/comments');  // by default it is get request
             })
         ```
    4. how to show particular comment   
       1. for this first we have to give specific id to each value in array in Index.js write this function
          ```
              const comments = [
                   {
                       id:0,
                       username: "Aman",
                       body:"This is a comment"
                   },
                   {
                       id:1,
                       username: "Cat",
                       body:"Meow Meow Meow"
                   },
                   {
                       id:2,
                       username: "Dog",
                       body:"Woof Woof Woof"
                   },
                   {
                       id:3,
                       username: "Prateek mishra",
                       body:"Hello from Google"
                   }
               ]
          ```
        2. Make a show.ejs, location will be -> (RestfulRouting/comments/show.ejs)
            ```
               <!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <meta charset="UTF-8">
                      <meta http-equiv="X-UA-Compatible" content="IE=edge">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Document</title>
                  </head>
                  <body>
                      <h1>Show Comment</h1>
                      <h2>ID:<%= comment.id %></h2>
                      <h3>Username : <%= comment.username %></h3>
                      <h5> Body : <%= comment.body %></h5>

                  </body>
                  </html>
            ```
          3. write this function in Index.js
            ```
                app.get('/comments/:id', (req, res) => {
                const { id } = req.params;
                const foundComment = comments.find(c => c.id===parseInt(id));
                res.render('comments/show',{comment:foundComment});
                })
            ```
            
               
        
        
         
          
          
