import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
    { path: "signin", component: SigninComponent},
    { path: "searchresult", component: SearchresultComponent},
    { path: "checkout", component: CheckoutComponent},
    //{ path: "welcome/:name", component: WelcomeComponent},
    // { path: "**", component: NotFoundComponent},
    { path: "**", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
