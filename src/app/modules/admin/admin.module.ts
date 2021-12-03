import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from "./admin-routing";

import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AirlineviewComponent } from './components/airlineview/airlineview.component';
import { FlightviewComponent } from './components/flightview/flightview.component';
import { ScheduleviewComponent } from './components/scheduleview/scheduleview.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { CouponviewComponent } from './components/couponview/couponview.component';
import { AddairlineComponent } from './components/addairline/addairline.component';
import { UpdateairlineComponent } from './components/updateairline/updateairline.component';
import { UpdateflightComponent } from './components/updateflight/updateflight.component';
import { UpdatescheduleComponent } from './components/updateschedule/updateschedule.component';
import { AddflightComponent } from './components/addflight/addflight.component';
import { AddscheduleComponent } from './components/addschedule/addschedule.component';



@NgModule({
  declarations: [
    AdmindashboardComponent,
    AirlineviewComponent,
    FlightviewComponent,
    ScheduleviewComponent,
    AdminheaderComponent,
    CouponviewComponent,
    AddairlineComponent,
    UpdateairlineComponent,
    UpdateflightComponent,
    UpdatescheduleComponent,
    AddflightComponent,
    AddscheduleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
