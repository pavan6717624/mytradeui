import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuturesService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:8081/MYTRADE/getFutureOIs')
  }

  checkData() {
    const headers = new HttpHeaders( { "Access-Control-Allow-Origin" : "*"});

    
    return this.http.get('https://www.nseindia.com/api/historical/securityArchives?from=04-10-2023&to=05-10-2023&symbol=SBIN&dataType=priceVolumeDeliverable&series=ALL',{headers: headers})
  }

}
