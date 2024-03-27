import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

 
  private ClassicURL = "assets/json-folder/classic-shoe.json"
  private mensURL = "assets/json-folder/men-full.json"

  constructor(private http : HttpClient) { }

  getClassicProduct(): Observable <any>{
    return this.http.get<any>(this.ClassicURL)
  }

  getClassicShoeDetails() : Observable <any>{
    return this.http.get<any>(this.ClassicURL)
  }

  getMens(): Observable<any>{
    return this.http.get<any>(this.mensURL)
  }


}
