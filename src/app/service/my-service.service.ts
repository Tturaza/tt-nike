import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private URL = "assets/popular-right-now.json"
  private ClassicURL = "assets/classic-shoe.json"

  constructor(private http : HttpClient) { }

  getClassicProduct(): Observable <any>{
    return this.http.get<any>(this.ClassicURL)
  }

  getClassicShoeDetails() : Observable <any>{
    return this.http.get<any>(this.ClassicURL)

  }
}
