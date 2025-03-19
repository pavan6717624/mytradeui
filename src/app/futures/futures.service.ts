import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuturesService {

  constructor(private http: HttpClient) { 

    this.getPosition().then(pos=>
      {
         console.log(`Positon: ${pos.lng} ${pos.lat}`);
      });

  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }

  getData() {
    return this.http.get('https://heidigi-app-38b2318c83b0.herokuapp.com/ZERODHA/getData?instrument=779521') //256265
  }

  checkData() {
    const headers = new HttpHeaders( { "Access-Control-Allow-Origin" : "*"});

    
    return this.http.get('https://www.nseindia.com/api/historical/securityArchives?from=04-10-2023&to=05-10-2023&symbol=SBIN&dataType=priceVolumeDeliverable&series=ALL',{headers: headers})
  }

}
