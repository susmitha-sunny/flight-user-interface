import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AdminauthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    if (this.isAdmin()) {
      return true;
    }
    
    this.router.navigate(['/notfound']);
    return false;
  }

  public isAdmin(): boolean {
    let status = false;
    if (localStorage.getItem('role') == "admin") {
      status = true;
    }
    return status;
  }
  
}
