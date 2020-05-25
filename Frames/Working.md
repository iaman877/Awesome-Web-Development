Use the <noresize> attribute to specify that a user cannot resize a <frame> element:
> <frame noresize="noresize">

Frame content should be defined using the src attribute.

Lastly, the <noframes> element provides a way for browsers that do not support frames to view the page. The element can contain an alternative page, complete with a body tag and any other elements.
```
<frameset cols="25%,50%,25%">
   <frame src="a.htm" />
   <frame src="b.htm" />
   <frame src="c.htm" />
   <noframes>Frames not supported!</noframes>
</frameset>
```
The <frame> tag is not supported in HTML5.
