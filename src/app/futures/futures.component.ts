import { Component, OnInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js/auto';
import { FuturesService } from './futures.service';

class Futures {
  open_int: number = 0;
  symbol: string = '';
  timestamp: string = '';
}

class ZData
{
  price: number=0;
	instrument: number=0;
	call: string='';
	lastPrice: number=0;
	close:number[]=[];
   open:number[]=[];
   high:number[]=[];
    low:number[]=[];
     oi:number[]=[];
     vol:number[]=[];
	 date: string[]=[];
}

@Component({
  selector: 'app-futures',
  templateUrl: './futures.component.html',
  styleUrls: ['./futures.component.css']
})
export class FuturesComponent implements OnInit, OnDestroy {

  private fetchInterval: any;

  map1 :any;
  name: string[] = [];
  public chart: Chart[] = [];
  dat: any;
  data: ZData[] = [];
  size:number=0;
  instrument: string = '256265';
  public isLoading: boolean = false;
  public lastPrice: number | null = null;

  currtime: string = new Date().toLocaleTimeString();

  onInstrumentChange($event: any) {
 
    // this.chart=[];

    this.fetchData();
    // You can add additional logic here to handle the instrument change
  }

  constructor(public futuresService: FuturesService) { }
  ngOnInit(): void {
   
this.fetchData();
    // call fetchData every 60 seconds
    this.fetchInterval = setInterval(() => this.fetchData(), 60000);
  }

  ngOnDestroy(): void {
    if (this.fetchInterval) {
      clearInterval(this.fetchInterval);
    }
  }

  maxCEPrice:number=0;
  maxCE:number=0;
   maxPEPrice:number=0;
    maxPE:number=0;
  fetchData() {
    this.isLoading = true;
    this.currtime = new Date().toLocaleTimeString();
    this.futuresService.getData(this.instrument).subscribe(
      (res:any) => {
        this.data=res;
        this.size=this.data.length;
        // set lastPrice from API response (use first element if present)
        this.lastPrice = (this.data && this.data.length>0) ? this.data[0].lastPrice : null;
        console.log(JSON.stringify(this.data)+" "+this.data.length);
       
       for(var i=0;i<this.data.length;i+=2)
        {
         this.name[i]=this.data[i].price+"";
        // Destroy existing chart for this index if it exists to avoid "canvas already in use" errors
        if (this.chart[i]) {
          try {
            this.chart[i].destroy();
          } catch (e) {
            console.warn('Error destroying existing chart at index', i, e);
          }
        }

        if(this.data[i].oi[this.data[i].oi.length-1]>this.maxCE)
        {
          this.maxCE=this.data[i].oi[this.data[i].oi.length-1];
          this.maxCEPrice=this.data[i].price;
        }

        if(this.data[i+1].oi[this.data[i+1].oi.length-1]>this.maxPE)
        {
          this.maxPE=this.data[i+1].oi[this.data[i+1].oi.length-1];
          this.maxPEPrice=this.data[i+1].price;
        }

        this.chart[i] = new Chart("MyChart"+i, {
          type: 'line', //this denotes tha type of chart
          options: {
            aspectRatio:2.5,
            plugins: {
                title: {
                    display: true,
                    text: this.data[i].price+"",
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                }
            },
            scales: {
              y: {
                type: 'linear',
                position: 'left'
              },
              y1: {
                type: 'linear',
                position: 'right',
                grid: {
                  drawOnChartArea: false
                }
              }
            }
          },
    
          data: {// values on X-Axis
            labels: this.data[i].date,
             datasets: [
              {
                label: "CE",
                data: this.data[i].oi,
                backgroundColor: 'blue',
                yAxisID: 'y'
              },
              {
                label: "PE",
                data: this.data[i+1].oi,
                backgroundColor: 'red',
                yAxisID: 'y'
              }  ,
              {
                label: "CE Price",
                data: this.data[i].close,
                borderColor: 'green',
                backgroundColor: 'rgba(0,128,0,0.1)',
                fill: false,
                pointRadius: 2,
                tension: 0.1
                ,
                yAxisID: 'y1'
              },
               {
                label: "PE Price",
                data: this.data[i+1].close,
                borderColor: 'orange',
                backgroundColor: 'rgba(0,128,0,0.1)',
                fill: false,
                pointRadius: 2,
                tension: 0.1
                ,
                yAxisID: 'y1'
              },
            ]
          },
        
        });

      }
      this.dat=new Date();
      this.isLoading = false;
      },
      (err:any) => {
        console.log(err);
        this.isLoading = false;
      }
    );

  }
}
