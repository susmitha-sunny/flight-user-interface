import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserauthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   if (this.isUser()) {
      return true;
    }
    
    this.router.navigate(['/notfound']);
    return false;
  }

  public isUser(): boolean {
    let status = false;
    if (localStorage.getItem('role') == "user") {
      status = true;
    }
    return status;
  }
  
}
