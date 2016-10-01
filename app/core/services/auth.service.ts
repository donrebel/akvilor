import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

// We want to avoid any 'name not found'
// warnings from TypeScript
declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  lock = new Auth0Lock('dXFukGIX83bwXj2R8yFPsKR3dhecEWZi', 'akvilor.auth0.com');

  login() {
    this.lock.show((error: string, profile: Object, id_token: string) => {
      if (error) {
        console.log(error);
      }
      // We get a profile object for the user from Auth0
      localStorage.setItem('profile', JSON.stringify(profile));
      // We also get the user's JWT
      localStorage.setItem('id_token', id_token);
    });
  }

  isLoggedIn() {
    let tockenNotExpired = false;
    try {
      tockenNotExpired = tokenNotExpired();
    } catch (e) {
      tockenNotExpired = false;
    }
    return tockenNotExpired
  }

  logout() {
    // To log out, we just need to remove
    // the user's profile and token
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }
}
