import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private URL = "assets/popular-right-now.json"

  constructor(private http : HttpClient) { }

  getPopularRightNow(): Observable <any>{
    return this.http.get<any>(this.URL)
  }
}
