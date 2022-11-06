# Topics Covered
- Block & Inline Elements
- Semantic Tags in HTML5
- Formatting Text in HTML
- Styling in HTML
- CSS Selectors



### Block and Inline Elements

| Block      | Inline |
| ----------- | ----------- |
| Always starts on a new line.      | Starts on the same line      |
| Takes up the full width available.   | Takes up the width of the content    |
| Can contain an inline element   | Cannot contain a block element  |


### Semantic Tags 
These tages clearly describes its meaning to both the browser and the developer.

-  Examples of non-semantic elements: "div and span" - Tells nothing about its content.
-  Examples of semantic elements: form, table, and article - Clearly defines its content.
  
![image](https://user-images.githubusercontent.com/49730521/125183726-899fe180-e236-11eb-997f-1e5f350dc7a3.png) 


### Formatting Text with HTML
- HTML contains several elements for defining text with a special meaning.
- <b> and <strong> emphasise the text in bold
- <i> and <em> show the text inside it in italics
- <small> is used for smaller paragraph text
- <b> is a style - we know what "bold" is supposed to look like.
- <strong> however is an indication of how something should be understood. 
- Even though <strong> is displayed in bold by the browsers.
- <strong> is a semantic tag - describes the content present inside it.
- Same is the case with <em> and <i>
- <em> stands for emphasis and is semantic, <i> is an italic style.

### Styling in HTML

Each element can have a style attribute to specify styles like font, size, color, etc.
```
 <tagname style="property:value;">
```
The property can be any valid CSS property and value is a CSS value (we will see many properties later)
 ```
<p style="color: tomato;">
    Cupcake ipsum dolor sit amet cotton candy tootsie roll pudding. Sesame
    snaps caramels sweet roll marshmallow tiramisu. Donut
</p>
```
This is called as inline styling in HTML
### Selectors in CSS
**Element Selector** -> Select elements with same name

 ```
 <head>
    <style>
        body {
            background-color: snow;
        }
    </style>
</head>
```
**Class Selectors** -> Select elements with same class attribute value
To use the class selector for any element we specify the class attribute for that element
```
<h1 class="title">Red Title</h1>
<h1>Normal Title</h1>
```
Next, we use the .class notation in our CSS to select all the elements with the specified class 
```
    <style>
        .title {
            color: red;
        }
    </style>
```
**ID selectors** -> Select element with a particular id
```
<h2 class="text-red">Podcasts</h2>
<p class="text-red">Sample text</p>
<h2 id="books-heading">Books</h2>
```
Then in the styles we use the # symbol to select the item.
```
<style>
 .text-red {
   color: red;
 }
 #books-heading {
   color: blueviolet;
   background-color: yellow;
 }
</style>
```

## Full Code

```
<html lang="en">
  <head>
    <title>Current Reads</title>
    <style>
      body {
        background-color: snow;
      }

      h1 {
        color: teal;
      }

      article {
        background-color: honeydew;
      }

      .book-title {
        color: cadetblue;
      }

      .book-author {
        color: darkgray;
      }

      .book-summary {
        color: gray;
      }

      #developer {
        color: darkred;
      }

      .link-item:link {
        color: black;
      }
      .link-item:visited {
        color: red;
      }
      .link-item:hover {
        color: cadetblue;
      }
      .link-item:active {
        color: pink;
      }
    </style>
  </head>

  <body>
    <header>
      <h1 id="Top">Currently Reading</h1>

      <nav>
        <ul>
          <li>
            <a href="#book_1" class="link-item"
              >One Hundred Years of Solitude</a
            >
          </li>
          <li><a href="#book_2">Atomic Habits</a></li>
          <li><a href="#book_3">Sapiens: A Brief History of Humankind</a></li>
        </ul>
      </nav>
    </header>

    <section>
      <ol type="1">
        <li id="book_1">
          <article>
            <h3 class="book-title">One Hundred Years of Solitude</h3>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/91hJ+hgZm4L.jpg"
              alt="Book 1"
              width="256px"
              height="400px"
            />
            <h4 class="book-author">By Gabriel Garcia Marquez</h4>
            <p class="book-summary">
              The theme of this book is about two families that witness various
              stages of life over the period of a century. How the protagonist
              try to come to grips with their past and how this obsessiveness
              brings about the doom of the family is captured in the novel.
            </p>
            <p>
              <a
                href="https://www.amazon.in/Hundred-Years-Solitude-International-Writers/dp/0140157514"
                target="_blank"
                >Buy from amazon</a
              >
              <a href="#Top">Back to Top</a>
            </p>
          </article>
        </li>

        <li id="book_2">
          <article>
            <h3 class="book-title">Atomic Habits</h3>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
              alt="Book 1"
              width="256px"
              height="400px"
            />
            <h4 class="book-author">By James Clear</h4>
            <p class="book-summary">
              World-renowned habits expert James Clear has discovered a simpler
              system for transforming your life. He knows that lasting change
              comes from the compound effect of hundreds of small decisions -
              doing two push-ups a day, waking up five minutes early, or holding
              a single short phone call. He calls them atomic habits.
            </p>
            <p>
              <a
                href="https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834"
                target="_blank"
                >Buy from amazon</a
              >
              <a href="#Top">Back to Top</a>
            </p>
          </article>
        </li>
        <li id="book_3">
          <article>
            <h3 class="book-title">
              Sapiens: A Brief History of Humankind
            </h3>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg"
              alt="Book 3"
              width="256px"
              height="400px"
            />

            <h4 class="book-author">By Yuval Noah Harari</h4>
            <p class="book-summary">
              Earth is <em>4.5 billion years old.</em> In just a fraction of
              that time, one species among countless others has conquered it:
              us. In this bold and provocative book, Yuval Noah Harari explores
              who we are, how we got here and where we're going.
            </p>
            <p>
              <a
                href="https://www.amazon.in/Sapiens-Humankind-Yuval-Noah-Harari/dp/0099590085"
                target="_blank"
                >Buy from amazon</a
              >
              <a href="#Top">Back to Top</a>
            </p>
          </article>
        </li>
      </ol>
    </section>

    <footer>
      <h4 id="developer">
        Website developed by Yash M Naik
      </h4>
      <a href="/index.html">Back To Menu</a>
    </footer>
  </body>
</html>
```
