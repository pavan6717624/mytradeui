import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartService } from './chart.service';
export class Data
{
  name: string = '';
  data: OIData = new OIData();
}
export class OIData
{
  putoi : number[]=[];
  calloi : number[]=[];
  date: string[] =[];
  price: number[]=[];

}
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public chart: Chart[] = [];
  price: number[]=[];
  NIFTY: string = '256265';
  data: Data[] = [];
  dat: any = new Date() ;
  size: number=0;
  name: string[] = [];

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
   
    this.chartService.getData().subscribe(
      (res:any) => {
        
        this.data=res;
        this.size=this.data.length;
        console.log(this.data+" "+this.data.length);

       for(var i=0;i<this.data.length;i++)
        {
         this.name[i]=this.data[i].name;
        this.chart[i] = new Chart("MyChart"+i, {
          type: 'line', //this denotes tha type of chart
          options: {
            aspectRatio:2.5,
            plugins: {
                title: {
                    display: true,
                    text: this.data[i].name,
                    
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                }
            }
          },
    
          data: {// values on X-Axis
            labels: this.data[i].data.date,
             datasets: [
              {
                label: "CE",
                data: this.data[i].data.calloi,
                backgroundColor: 'blue'
              },
              {
                label: "PE",
                data: this.data[i].data.putoi,
                backgroundColor: 'red'
              }  ,
              {
                label: "PRICE",
                data: this.data[i].data.price,
                backgroundColor: 'yellow'
              }  
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

  createChart(){
  
   
  }

}
