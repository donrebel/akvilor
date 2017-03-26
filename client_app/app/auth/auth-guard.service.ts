import { Injectable } from '@angular/core';
import {
  Router, CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string) {
    if (this.authService.authenticated()) {
      return true;
    }
//    this.authService.setRedirectUrl(url);
    this.authService.login();

    return false;
  }

}
