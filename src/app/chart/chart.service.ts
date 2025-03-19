import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get('https://heidigi-app-38b2318c83b0.herokuapp.com/MYTRADE/getLastPrice')
  }


  
}
