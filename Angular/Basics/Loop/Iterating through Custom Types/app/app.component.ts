import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  subaru: Car = {make: 'Aman', model: 'Outback', miles: 58233};
  honda: Car = {make: 'Alok', model: 'race', miles: 39394};
  bmw: Car = {make: 'Arun', model: 'X43', miles: 4401};

  cars:Car[] = [this.subaru, this.honda, this.bmw];
}
