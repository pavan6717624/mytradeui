import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get('https://srinivas-app-23722fde5f1f.herokuapp.com/MYTRADE/getLastPrice')
  }


  
}
