# Topics Covered
- Positioning in Grids

### Positioning Grid Items - Using Grid Lines
- To position grid items we can use a lot of strategies on the grid item.
- The grid-column-start, grid-column-end properties allow us to select the exact start and end grid-column-line for the element.
- The below code defines that the #item-1 should start at grid column line 1 and end at grid column line 3.
```
#item-1 {
     grid-column-start: 1;
     grid-column-end: 3;
}

```
- Similarly we can use grid-row-start and grid-row-end to define which grid row line the element should start and end.
```
#item-3 {
 grid-row-start: 2;
 grid-row-end: 5;
}
```
- The margins are defined from one-grid line to another. Padding is defined inside the item. 


