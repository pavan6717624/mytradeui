import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { FuturesService } from './futures.service';

class Futures {
  open_int: number = 0;
  symbol: string = '';
  timestamp: string = '';
}

@Component({
  selector: 'app-futures',
  templateUrl: './futures.component.html',
  styleUrls: ['./futures.component.css']
})
export class FuturesComponent implements OnInit {

  map1 :any;
  name: string[] = [];
  public chart: Chart[] = [];
  dat: any;

  constructor(public futuresService: FuturesService) { }

  ngOnInit(): void {
    // this.futuresService.getData().subscribe(
    //   (res: any) => {

    //     this.map1 = res;
    //     console.log(this.map1);
    //     console.log(this.map1[0]);
    //     console.log(this.map1[0][0].symbol);
    //     console.log(this.map1[0].map((o:any)=>o.timestamp));

 

    //     for (var i=0;i<this.map1.length;i++) {
    //       this.name[i] = this.map1[i][0].symbol;
    //       var key=this.name[i];
    //       // let labels: any, data: any;
    //       // let labelsData = [], ddata = [];
    //       // if (key) {
    //       //   labels = this.map1[i].map((o:any)=>o.timestamp);
    //       //   data = this.map1[i].map((o:any) => o.open_int);
    //       //   for (var i = 0; i < labels?.length; i++) {
    //       //     labelsData[i] = labels[i];
    //       //   }
    //       //   for (var i = 0; i < data?.length; i++) {
    //       //     ddata[i] = data[i];
    //       //   }


    //       // }

    //       this.chart[i] = new Chart("MyChart" + i, {
    //         type: 'line', //this denotes tha type of chart
    //         options: {
    //           aspectRatio: 2.5,
    //           plugins: {
    //             title: {
    //               display: true,
    //               text: key,

    //               padding: {
    //                 top: 10,
    //                 bottom: 30
    //               }
    //             }
    //           }
    //         },

    //         data: {// values on X-Axis
    //           labels: this.map1[i].map((o:any)=>o.timestamp),
    //           datasets: [
    //             {
    //               label: "CE",
    //               data: this.map1[i].map((o:any) => o.open_int),
    //               backgroundColor: 'blue'
    //             },

    //           ]
    //         },


    //       });
    //       this.dat = new Date();
    //     }

    //     console.log(this.chart);

    //   },
    //   (err: any) => {
    //     console.log(err);
    //   }
    // );


    this.futuresService.checkData().subscribe(
      (res)=> console.log(res),
      (err)=> console.log(err)
    )
  }
}
