import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { FuturesComponent } from './futures/futures.component';

const routes: Routes = [

    {path:'',component:ChartComponent},
    {path:'futures',component:FuturesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
