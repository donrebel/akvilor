import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

// We want to avoid any 'name not found'
// warnings from TypeScript
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  redirectUrl: string;
  lock = new Auth0Lock('dXFukGIX83bwXj2R8yFPsKR3dhecEWZi', 'akvilor.auth0.com');

  constructor(
    private router: Router
  ) {
    this.redirectUrl = localStorage.getItem('redirectUrl');
    // Add callback for lock 'authenticated' event
    this.lock.on("authenticated", (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.lock.getProfile(authResult.idToken, (error:any, profile: any) => {
        if (error) {
          console.log(error);
        }
        localStorage.setItem('profile', JSON.stringify(profile));
        console.log(JSON.stringify(profile));
      });
      let redirect = this.redirectUrl ? this.redirectUrl : '/main-page';
      this.router.navigate([redirect]);
      this.lock.hide();
    });
  }

  public setRedirectUrl(url: string): void {
    localStorage.setItem('redirectUrl', url);
  }

  public login() {
    this.lock.show();
  }

  public logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    localStorage.removeItem('redirectUrl');
    this.router.navigate(['/main-page']);
  }

  public authenticated() {
    return tokenNotExpired();
  }
}
