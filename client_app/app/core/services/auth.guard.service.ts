import { Injectable } from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.authenticated) {
      return true
    }
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
  }
}

//   if (this.authService.authenticated()) {
//     return true;
//   }
//   //this.router.navigate(['/login']);
//   this.authService.login();
//   return false;
// }
