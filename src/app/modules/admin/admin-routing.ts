import { Routes } from '@angular/router';
import { AdminauthGuard } from '../../guards/adminauth.guard';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AirlineviewComponent } from './components/airlineview/airlineview.component';
import { FlightviewComponent } from './components/flightview/flightview.component';
import { ScheduleviewComponent } from './components/scheduleview/scheduleview.component';
import { CouponviewComponent } from './components/couponview/couponview.component';
import { AddairlineComponent  } from './components/addairline/addairline.component';
import { AddflightComponent  } from './components/addflight/addflight.component'
import { AddscheduleComponent  } from './components/addschedule/addschedule.component';
import { UpdateairlineComponent  } from './components/updateairline/updateairline.component';
import { UpdateflightComponent  } from './components/updateflight/updateflight.component';
import { UpdatescheduleComponent  } from './components/updateschedule/updateschedule.component';

export const routes: Routes = [
  { path: "admindashboard", canActivate: [AdminauthGuard], component: AdmindashboardComponent },
  { path: "airlineview", canActivate: [AdminauthGuard], component: AirlineviewComponent },
  { path: "flightview", canActivate: [AdminauthGuard], component: FlightviewComponent },
  { path: "scheduleview", canActivate: [AdminauthGuard], component: ScheduleviewComponent },
  { path: "couponview", canActivate: [AdminauthGuard], component: CouponviewComponent },
  { path: "addairline", canActivate: [AdminauthGuard], component: AddairlineComponent },
  { path: "addflight", canActivate: [AdminauthGuard], component: AddflightComponent },
  { path: "addschedule", canActivate: [AdminauthGuard], component: AddscheduleComponent },
  { path: "updateairline", canActivate: [AdminauthGuard], component: UpdateairlineComponent },
  { path: "updateflight", canActivate: [AdminauthGuard], component: UpdateflightComponent },
  { path: "updateschedule", canActivate: [AdminauthGuard], component: UpdatescheduleComponent },
  { path: "**", redirectTo: "/notfound" }
];

