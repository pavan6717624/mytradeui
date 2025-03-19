import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { FuturesComponent } from './futures/futures.component';
import { AmazonComponent } from './amazon/amazon.component';

const routes: Routes = [

    {path:'',component:ChartComponent},
    {path:'futures',component:FuturesComponent},
    {path:'amazon',component:AmazonComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
