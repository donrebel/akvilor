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
    // Add callback for lock 'authenticated' event
    this.lock.on("authenticated", (authResult: any) => {
      console.log('authenticated');
      localStorage.setItem('id_token', authResult.idToken);
      this.lock.getProfile(authResult.idToken, (error:any, profile: any) => {
        if (error) {
          console.log(error);
        }
        localStorage.setItem('profile', JSON.stringify(profile));
      });
      let redirect = this.redirectUrl ? this.redirectUrl : '/main-page';
      this.router.navigate([redirect]);
      this.lock.hide();
    });
  }

  public login() {
    this.lock.show();
  }

  public logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    this.router.navigateByUrl('/login');
  }

  public authenticated() {
    let tockenNotExpired = false;
    try {
      tockenNotExpired = tokenNotExpired();
    } catch (e) {
      tockenNotExpired = false;
    }
    return tockenNotExpired
  }

}

// login() {
//   this.lock.show((error: string, profile: Object, id_token: string) => {
//     if (error) {
//       console.log(error);
//     }
//     // We get a profile object for the user from Auth0
//     localStorage.setItem('profile', JSON.stringify(profile));
//     // We also get the user's JWT
//     localStorage.setItem('id_token', id_token);
//   });
// }
