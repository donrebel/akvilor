import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

import { APP_CONFIG, AppConfig } from '../app-config';
// import { UserAccount, UserProfile } from './user-account';
import { UserAccount, UserProfile } from './auth.models';

import { UtilService } from '../core/services/util.service';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';


declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  private redirectUrl: string;
  private apiBaseUrl: string;
  private lock = new Auth0Lock('dXFukGIX83bwXj2R8yFPsKR3dhecEWZi', 'akvilor.auth0.com');

  //currentUserAccount: UserAccount;

  private guestAccount: UserAccount = new UserAccount("guest");
  private _currentUserAccount: BehaviorSubject<UserAccount> = new BehaviorSubject(this.guestAccount);

  constructor(
    private http: Http,
    private router: Router,
    private util: UtilService,
    @Inject(APP_CONFIG) appConfig: AppConfig
  ) {
    this.apiBaseUrl = appConfig.apiEndpoint;
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
        this.setCurrentUserAccount(profile);
      });
      let redirect = this.redirectUrl ? this.redirectUrl : '/home';
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
    this.router.navigate(['/home']);
  }

  public authenticated() {
    return tokenNotExpired();

  }

  public getCurrentUserAccount() {
    return this._currentUserAccount.asObservable();
  }

  private setCurrentUserAccount(profile: UserProfile) {
    if (profile) {
      let user_id = profile.identities[0].user_id;
      this.http.get(`${this.apiBaseUrl}userAccount/${user_id}`)
                .map(this.util.extractDataHttpRequest)
                .catch(this.util.handleErrorHttpRequest)
                .subscribe(
                  (acc) => {this._currentUserAccount.next(acc)},
                  (err) => {console.log(err)},
                  () => {}
                );
    }
  }
}
