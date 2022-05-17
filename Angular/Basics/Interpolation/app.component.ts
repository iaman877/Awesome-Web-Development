import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'perfectApp';
  name = "Aman Bhardwaj"
  getName()
  {
    return this.name
  }
  obj = {
    name: 'peter',
    age: 20
  }
  arr = ["pawan","jay",'luv']
  siteUrl = window.location.href
}
