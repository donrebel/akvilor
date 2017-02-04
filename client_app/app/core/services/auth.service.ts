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
    router: Router
  ) {
    // Add callback for lock 'authenticated' event
    this.lock.on("authenticated", (authResult) => {
      console.log('authenticated');
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    //console.log(this.router.RouterState);
    this.lock.show();
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

  public authenticated() {
    return tokenNotExpired()
  }

  // isLoggedIn() {
  //   let tockenNotExpired = false;
  //   try {
  //     tockenNotExpired = tokenNotExpired();
  //   } catch (e) {
  //     tockenNotExpired = false;
  //   }
  //   return tockenNotExpired
  // }

  public logout() {
    localStorage.removeItem('id_token');
  }

  // logout() {
  //   // To log out, we just need to remove
  //   // the user's profile and token
  //   localStorage.removeItem('profile');
  //   localStorage.removeItem('id_token');
  // }
}
