import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  yourName = "Aman";
  getName(name:any)
  {
    alert(name)
  }
  
}
