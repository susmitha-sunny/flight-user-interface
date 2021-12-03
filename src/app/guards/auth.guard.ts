import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.isGuest()) {
      return true;
    }
  
    this.router.navigate(['/notfound']);
    return false;
  }

  public isGuest(): boolean {
    let status = false;
    if (localStorage.getItem('role') == "guest") {
      status = true;
    }
    return status;
  }
}

