import { Injectable } from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
      // Not using but worth knowing about
      next:  ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ) {
      if (this.authService.isLoggedIn()) {
        return true;
      }
      //this.router.navigate(['/login']);
      this.authService.login();
      return false;
    }

}
