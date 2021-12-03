import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { MytripsComponent } from './components/mytrips/mytrips.component'
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
    { path: "signin", component: SigninComponent},
    { path: "mytrips", component: MytripsComponent},
    { path: "flight", loadChildren: () => import("./modules/flight/flight.module").then(m => m.FlightModule)},
    { path: "admin", loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)},
    { path: "user", loadChildren: () => import("./modules/user/user.module").then(m => m.UserModule)},
    {path: "notfound", component: NotfoundComponent},
    { path: "",  pathMatch: 'full', redirectTo: "home"},
    { path: "**", pathMatch: 'full', redirectTo: "notfound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
