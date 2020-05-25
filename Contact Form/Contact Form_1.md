Next, we'll create a Contact Form for your blog. The form will include Name, Email, and Message fields. We'll also add a Submit button.
Check out the code:

```
<h1><span>Contact Me</span></h1>
<form>
  <input name="name" type="text" /><br/>
  <input name="email" type="email" /><br/>
  <textarea name="message"></textarea>
  <input type="submit" value="SEND" class="submit" />
</form>
```

This is just a static HTML page, so it won't work to actually submit the form. You'd need to create the server-side code in order to submit a real form and process the data.
