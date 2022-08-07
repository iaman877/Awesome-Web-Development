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
  ApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=pastekeyhere';
  
  NewMethod():Observable<any>{
     return this._http.get(this.ApiUrl);
  }
}
