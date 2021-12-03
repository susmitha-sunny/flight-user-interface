import { Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';
import { AuthGuard } from '../../guards/auth.guard';

export const routes: Routes = [
  { path: "searchresult", canActivate: [AuthGuard], component: SearchresultComponent },
  { path: "checkout", canActivate: [AuthGuard], component: CheckoutComponent },
  { path: "confirmation", canActivate: [AuthGuard], component: ConfirmationComponent },
  { path: "**", redirectTo: "/notfound" }
];

