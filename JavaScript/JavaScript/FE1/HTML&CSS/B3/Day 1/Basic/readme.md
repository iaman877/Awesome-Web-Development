# Topics Covered
- Positioning in CSS
- Position Attributes
- Absolute & Relative Positioning
- CSS Grids
- Creating Grid Layouts

### Positioning in CSS
- The position property in CSS helps manipulate the location of an element
- There are primarily 5 different types of positioning strategies you can follow
   - Static : default for every single element. It means that the element will be placed "normally" i.e. vertical stacking for block and horizontal for inline elements
The other properties like left/right/top/bottom/z-index will have no effect here.

   - Relative : Relative means → "Relative to its original position on the page" In essence, if you set position: relative but no positioning attributes (left, right, top, bottom) then it will have NO effect on positioning. If you set a positioning attribute to some length → element will shift from its original position.

   - Absolute : Allows you to place an element exactly where we want. Use positioning attributes to set the location. These values are relative to the next (or closest) parent element's positioning (relative or absolute) If no position attribute in parent then, by default the element is placed relative to the page itself. An absolute element is removed from the flow of the page, i.e. it is not affected by other elements around it.
   - Fixed : With position: fixed the element is positioned relative to the viewport or browser window. A fixed element stays where it was when the content is scrolled.
Useful for navigation bars and headers. One concern is that it causes the content under it to be inaccessible.

   - Sticky
- Position is a non-cascading (non-inherited) property.
- position property goes hand in hand with positioning attributes like left, right, top, bottom , and z-index properties.

```
        article:hover {
            background-color: lavender;
        }
```


### **The display property** 
Since every element on the page is a rectangular box, the display property determines how that box behaves.
It holds some common values like
 - inline → Make the box an inline element
 - block → Makes the box a block element
 - inline-block → Makes the box a block element which would behave like inline elements.
 - flex → Makes the element behave like a flexbox container
 - grid → Makes the element behave like a grid container
 - 
#### CSS Grid
- CSS Grid is a two-dimensional grid-based layout system.
- It helps place the rectangular elements on a web page in complex manners.
- A grid is made up of 6 important elements
    - Grid Container (Parent)
    - Grid Item (Children)
    - Grid Rows (the horizontal parts)
    - Grid Columns (the vertical parts)
    - Grid Lines - which divide the rows and columns
    - Grid Cell - Space between two adjacent row and two adjacent column grid lines

####  Grid Container & Item
- The Grid container forms a wrapper element for all the grid items under it.
- It is defined with the property _display: grid_ on any block element (like div)
- All direct descendants of the grid container are known as grid items.
Some properties regarding the grid layout apply on the container, while the ones concerned with an items location within the grid are applied on the grid item

```
<div style="display: grid">
     <div>1</div>
     <div>2</div>
     <div>3</div>
</div>
 ```
 #### Rows and Columns
- To make our linear grid two-dimensional, we need to define the number of rows and columns.
- We can do that by using the grid-template-rows and grid-template-columns property of the grid container
- For example to define a grid of 3 (columns) x 2 (rows) grid on our page we could do something like
```
.grid-container {
 display: grid;
 grid-template-rows: 8rem 8rem;
 grid-template-columns: 8rem 8rem 8rem;
}
```


