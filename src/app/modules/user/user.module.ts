import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from "./user-routing";
import { TripsComponent } from './components/trips/trips.component';
import { PnrComponent } from './components/pnr/pnr.component';
//import { CommonheaderComponent } from '../../components/commonheader/commonheader.component';
import { RouterModule } from '@angular/router';
import { SimpleheaderComponent } from './components/simpleheader/simpleheader.component';

@NgModule({
  declarations: [
    TripsComponent,
    PnrComponent,
    SimpleheaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)]
})
export class UserModule { }
