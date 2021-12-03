import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from "./flight-routing";

import { SearchresultComponent } from './components/searchresult/searchresult.component'
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { TripsheaderComponent } from './components/tripsheader/tripsheader.component';

@NgModule({
  declarations: [
    SearchresultComponent,
    CheckoutComponent,
    ConfirmationComponent,
    TripsheaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)]
})
export class FlightModule { }
