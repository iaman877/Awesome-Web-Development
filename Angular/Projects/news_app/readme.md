1. News Api building realtime application in angular

Things to be learn  in this Project 

Angular Component
Import Http clientModule
Angular Service
Angular Routing
Ngx Loading bar

Phase 1
1. ng new news_app
2. HttpClientModule in app.component.ts
> import { HttpClientModule} from '@angular/common/http';
3. ng serve -o

Add Bootstrap css and Js files from https://getbootstrap.com/ to index.html
Take Navbar snipped from Bootstrap and add it in app.component.ts



Generate a component names as "Header" and do 2 main thing 
1. import in app.component.ts
> import { HeaderComponent } from './header/header.component';
2. configure routes 
> {path: '', component:HeaderComponent}


Collect ends point of API from https://newsapi.org/


Generate a Service names as "newsapi" in Service Directory and do 3 main thing 
1. import in app.component.ts
> import { NewsapiService} from './service/newsapi.service'
2. register provider in app.component.ts 
> providers: [NewsapiService]
3. import HttpClient in nesapi.service.ts
import { HttpClient } from '@angular/common/http';
&

```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UntypedFormArray } from '@angular/forms';
import { InvokeFunctionExpr } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }
  ApiUrl = 'Paste URL Here';
  
  NewMethod():Observable<any>{
     return this._http.get(this.ApiUrl);
  }
}
```

Now subscribe api response in header.component.ts
```
import { Component, OnInit } from '@angular/core';
import {NewsapiService} from '../service/newsapi.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:NewsapiService) { }
  newsdata:any = [];
  ngOnInit(): void {
       this.api.NewMethod().subscribe((result)=>
       {
        console.log(result)
        this.newsdata = result.articles;
       })
  }
}
```
In header.component.html
```
<div class="container fluid mt-3">
     <div class = "row mt-3">
        <div *ngFor="let item of newsdata" class = "col-lg-3 mt-3 mb-3">
            <div class = "box">
            <img src="{{item.urlToImage}}" width="100%">
            <h5>{{item.title}}</h5>
            <!-- <P>{{item.content}}</P> -->
            <a href="{{item.url}}">Read More</a>
            </div>
        </div>
     </div>
</div>
```




