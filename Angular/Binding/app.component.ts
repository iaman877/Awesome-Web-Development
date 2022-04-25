import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name = 'Aman';
  a = 'Bhardwaj';
  disabledBox= true;
  enableBox()
  {
     this.disabledBox = false;
  }
}
