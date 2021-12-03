import { Routes } from '@angular/router';
import { AdminauthGuard } from '../../guards/adminauth.guard';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AirlineviewComponent } from './components/airlineview/airlineview.component';
import { FlightviewComponent } from './components/flightview/flightview.component';
import { ScheduleviewComponent } from './components/scheduleview/scheduleview.component';
import { CouponviewComponent } from './components/couponview/couponview.component';

export const routes: Routes = [
  { path: "admindashboard", canActivate: [AdminauthGuard], component: AdmindashboardComponent },
  { path: "airlineview", canActivate: [AdminauthGuard], component: AirlineviewComponent },
  { path: "flightview", canActivate: [AdminauthGuard], component: FlightviewComponent },
  { path: "scheduleview", canActivate: [AdminauthGuard], component: ScheduleviewComponent },
  { path: "couponview", canActivate: [AdminauthGuard], component: CouponviewComponent },
  { path: "**", redirectTo: "/notfound" }
];

