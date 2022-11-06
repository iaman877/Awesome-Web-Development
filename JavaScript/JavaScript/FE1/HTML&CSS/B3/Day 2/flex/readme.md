# Topics Covered
- Introduction to Flexbox
- Placing and Aligning items in flexbox
- Creating Common Layouts
- Fitting images

### Introduction
- Flexbox is used to layout, align, and distribute space among items in a container.
- It is useful when the size of the container/items is unknown and/or dynamic.
- Flexbox is well-suited for application components like inside the navbar, or forms, or cards etc
- Flexbox is made up of two main components
    - Flexbox Parent (Container)
    - Flexbox Children (Items)

### flex box
<img width="696" alt="Screenshot 2022-11-06 at 11 03 31 PM" src="https://user-images.githubusercontent.com/49730521/200185869-cacdccb7-d426-4474-88d0-3fce2af5ec38.png">

### Creating a Flexbox
- Start by defining display: flex to a block element (like div)
- Using this property will do two main things.
    - It will make the div as a flex container → which will hold the properties which define the direction, and the layout of the items.
    - Set the main axis, hence will define the direction of the items. Default left-to-right. The other axis will be called the cross-axis (we will understand its use later)

### Adding Flexbox items
- To create any flexbox item, just simply nest it inside a flex parent.
- Each block item inside the flex parent will now behave like a flex item and follow the layout defined by the parent.

### Adjusting items on the main axis
- Now by default all flexbox items will be placed at the left end of the flexbox container.
<img width="695" alt="Screenshot 2022-11-06 at 11 18 48 PM" src="https://user-images.githubusercontent.com/49730521/200186595-6ee4d655-a65d-4914-b339-8392ca67ac21.png">
- We can change 2 things here
    - Their placement inside the flex → either left, right, or center.
    - The space between them.

### Placing Items inside the flex
- We can do this by using the justify-content property on the parent.
- By default, the items are placed on the left end (or where the flex's main axis starts)
- We can move them to the right end or center by using *justify-content: flex-end* or *justify-content: center*
<img width="834" alt="Screenshot 2022-11-06 at 11 34 57 PM" src="https://user-images.githubusercontent.com/49730521/200187361-f9f62c13-28b9-46eb-a2c4-09fd750ee31e.png">

### Distributing space between items
- The justify-content property also allows us to distribute space between the elements.
- We can spread out the items to cover the available space, i.e. 1st item on the start, 2nd item towards the very end. 
    - This is done by justify-content: space-between

<img width="897" alt="Screenshot 2022-11-06 at 11 39 37 PM" src="https://user-images.githubusercontent.com/49730521/200187715-9f07c94f-00a6-41fc-aefb-48094b3bc1c5.png">

### Aligning items along the cross axis
- By default, the items are placed at the start of the cross axis, but we can place them at the bottom, or even at the center using flex-end and center values for the align-items property.
<img width="952" alt="Screenshot 2022-11-06 at 11 43 59 PM" src="https://user-images.githubusercontent.com/49730521/200187841-c7ac61c2-1ca1-4444-8481-eae42c6e0cb7.png">

- How would you center a child inside a parent?
```
justify-content: center;
align-items: center;
```
### How to prevent this squishing of image?
-  To prevent image from squishing i.e. maintaining its aspect ratio we use object-fit property and set it to
    - contain - If we want to resize the image to fit the given parent dimensions. Image is not clipped
    - cover → Does the same thing as contain but image is clipped.



