import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get('https://take-app-4afe487d41cd.herokuapp.com/MYTRADE/getLastPrice')
  }


  
}
