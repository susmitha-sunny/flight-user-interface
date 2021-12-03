import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { routes } from "./admin-routing";

import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AirlineviewComponent } from './components/airlineview/airlineview.component';
import { FlightviewComponent } from './components/flightview/flightview.component';
import { ScheduleviewComponent } from './components/scheduleview/scheduleview.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { CouponviewComponent } from './components/couponview/couponview.component';



@NgModule({
  declarations: [
    AdmindashboardComponent,
    AirlineviewComponent,
    FlightviewComponent,
    ScheduleviewComponent,
    AdminheaderComponent,
    CouponviewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
