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
  instrument: string = '265';

  onInstrumentChange($event: any) {
 
    // this.chart=[];

    this.fetchData();
    // You can add additional logic here to handle the instrument change
  }

  constructor(public futuresService: FuturesService) { }
  ngOnInit(): void {
   
this.fetchData();
    // call fetchData every 30 seconds
    this.fetchInterval = setInterval(() => this.fetchData(), 30000);
  }

  ngOnDestroy(): void {
    if (this.fetchInterval) {
      clearInterval(this.fetchInterval);
    }
  }


  fetchData() {

    this.futuresService.getData(this.instrument).subscribe(
      (res:any) => {
        
        this.data=res;
        this.size=this.data.length;
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
            }
          },
    
          data: {// values on X-Axis
            labels: this.data[i].date,
             datasets: [
              {
                label: "CE",
                data: this.data[i].oi,
                backgroundColor: 'blue'
              },
              {
                label: "PE",
                data: this.data[i+1].oi,
                backgroundColor: 'red'
              }  ,
              // {
              //   label: "PRICE",
              //   data: this.data[i].data.price,
              //   backgroundColor: 'yellow'
              // }  
            ]
          },
        
          
        });

      }
      this.dat=new Date();
      },
      (err:any) => {
        console.log(err);
      }
    );

  }
}
