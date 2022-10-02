# Topics Covered
- Pseudo-Classes
- Selector Specificity
- Inheritance in CSS
- Length Units
- Box Model 


### Pseudo-Classes
- A pseudo class is used to define a special state of an element
- These can be useful when we need to style an element based on some conditions
- There are few pseudo-classes available
    - :link -> to change the styles of unvisited links
    - :visited -> to change styles of visited links
    - :hover -> to change the styles of an element when the cursor is brought over it
    - :active -> to change the styles of the selected element
```
        article:hover {
            background-color: lavender;
        }
```
##### **Best Practice** Styling Links
a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective! a:active MUST come after a:hover in the CSS definition in order to be effective! Pseudo-class names are not case-sensitive.

### **Specificity** :- Hierarchy of selector in css
#### Activity
Given this HTML snippet and its corresponding styles predict the background color of the <main> element
```
<main class="main" id="main">
     <p>This is a para inside child</p>
   </main>
 ```
 ```
 main {
 background-color: lightcoral;
}
.main {
 background-color: lightblue;
}
#main {
 background-color: lightgreen;
}
```
- Hierarchy (from highest specificity to lowest)
    - Inline Styles
    - ID Selectors
    - Class Selectors
    - Element Selectors
    
- For equal Specificity - Lower (or latest) rule in the sheet wins.

### Inheritance in CSS
#### Activity - Predicting Color CSS
what should be the color of child class for below code snipped?
```
HTML
 <section class="parent">
   <div class="child">
     <p>This is a para inside child</p>
   </div>
 </section>
CSS
.parent {
 color: steelblue;
 background-color: lightcyan;
}
```
##### Below are some deciding point
- Some properties are inherited down the HTML while others are not.
- Styles that are inherited are generally related to the styling of the document text.
    - Example Fonts and colors
- Styles that are not inherited are usually related to the appearance of elements.
    - Parameters for positioning, sizes, margins, backgrounds, and frames:
    - Example border, padding, margin, width, height, position, and others
- **Do not confuse this with the fact that block elements take all the available width**
    - https://dev.to/muyunyun/inherited-and-non-inherited-in-css-mi4
- **!important property**
    - If at any point we wish to override the properties
        - inherited from the parent 
        - due to specificity.
    - We can use the !important property in CSS which overrides all the CSS rules.
        p {
             color: gold !important;
          }
            p {
             color: red;
            }

## code
```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="./styles.css" />
  </head>

  <body>
    <a href="#about" class="nav">About</a>
    <a href="#features">Features</a>
    <a href="#howTo" id="howTo">How to use?</a>
    <section>
      <p>Lorem Ipsume</p>
    </section>
  </body>
</html>
```
```
a:link {
  color: green;
}
a:visited {
  color: steelblue;
}

a:hover {
  color: violet;
}

a:active {
  color: tomato;
}

section:hover {
  background-color: blue;
}

section:active {
  background-color: gold;
}

#howTo:link {
  color: magenta;
}
```
## Length Units

<img width="1106" alt="Screenshot 2022-10-02 at 7 40 41 PM" src="https://user-images.githubusercontent.com/49730521/193459127-c01395a8-8248-4262-922a-7a13e22142c2.png">
<img width="1106" alt="Screenshot 2022-10-02 at 7 41 04 PM" src="https://user-images.githubusercontent.com/49730521/193459136-0b0f3761-1b6f-40d1-820a-0239b8c5d696.png">
<img width="1210" alt="Screenshot 2022-10-02 at 7 41 56 PM" src="https://user-images.githubusercontent.com/49730521/193459140-f5ca376c-c062-403a-82d6-70a51ca59cc6.png">

## Box Model 
<img width="809" alt="Screenshot 2022-10-02 at 7 47 56 PM" src="https://user-images.githubusercontent.com/49730521/193459086-647930ad-d18b-4e7a-a831-6988806f0269.png">
