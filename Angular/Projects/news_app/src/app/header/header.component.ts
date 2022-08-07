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
