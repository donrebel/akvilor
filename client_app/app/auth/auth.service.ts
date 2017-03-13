import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

import { APP_CONFIG, AppConfig } from '../app-config';
// import { UserAccount, UserProfile } from './user-account';
import { UserAccount, UserProfile } from '../app.models';

import { UtilService } from '../core/services/util.service';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  private redirectUrl: string;
  private apiBaseUrl: string;
  private lock = new Auth0Lock(
    'dXFukGIX83bwXj2R8yFPsKR3dhecEWZi',
    'akvilor.auth0.com', {
      auth: {
          redirectUrl: location.origin,
          responseType: 'token',
          redirect: false,
      }
    });

  //currentUserAccount: UserAccount;

  private guestAccount: UserAccount = new UserAccount("guest");
  private _currentUserAccount: BehaviorSubject<UserAccount> = new BehaviorSubject(this.guestAccount);
  private currentUserID: string;

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
//      let redirect = this.redirectUrl ? this.redirectUrl : '/home';
      this.router.navigateByUrl(authResult.state);
      this.lock.hide();
    });

    this.setCurrentUserAccount();

  }

  public setRedirectUrl(url: string): void {
    localStorage.setItem('redirectUrl', url);
  }

  public login() {
    this.lock.show({
      auth: {
        params: {
          state: this.router.url
        }
      }
    });
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

  public updateCurrentUserProfileData (profileData: UserAccount):Observable<UserAccount> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(`${this.apiBaseUrl}userAccount/${this.currentUserID}`, profileData, options)
                      .map((response) => {
                        let res = this.util.extractDataHttpRequest(response)
                        if (response.ok) {
                          this._currentUserAccount.next(profileData);
                        }
                        return res
                      })
                      .catch(this.util.handleErrorHttpRequest);
  }

  private setCurrentUserAccount(profile?: UserProfile) {
    if (!profile) {
      if (!localStorage.getItem('profile') == false) {
        let profileStr = localStorage.getItem('profile');
        profile = <UserProfile>JSON.parse(profileStr);
      }
    }

    if (profile) {
      this.currentUserID = profile.identities[0].user_id;
      this.http.get(`${this.apiBaseUrl}userAccount/${this.currentUserID}`)
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

// var obj = {x: 1};
// var source = Rx.Observable.ofObjectChanges(obj);
//
// var subscription = source.subscribe(
//   function (x) {
//     console.log('Next: %s', x);
//   },
//   function (err) {
//     console.log('Error: %s', err);
//   },
//   function () {
//     console.log('Completed');
//   });
//
// obj.x = 42;
