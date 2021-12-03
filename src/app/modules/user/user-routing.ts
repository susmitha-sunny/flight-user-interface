import { Routes } from '@angular/router';
import { TripsComponent } from './components/trips/trips.component';
import { PnrComponent } from './components/pnr/pnr.component';
import { UserauthGuard } from '../../guards/userauth.guard';


export const routes: Routes = [
  { path: "trips", canActivate: [UserauthGuard], component: TripsComponent },
  { path: "pnr", canActivate: [UserauthGuard], component: PnrComponent },
  { path: "**", redirectTo: "/notfound" }
];

