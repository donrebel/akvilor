import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';

import { APP_CONFIG, AppConfig } from '../app-config';
import { AuthOUserProfile, UserProfile } from '../app.models';
import { UtilService } from '../core/services/util.service';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

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


  private currentUserID: string;
  private guestProfile: UserProfile;
  private $currentUserProfile: BehaviorSubject<UserProfile>;

  constructor(
    private http: Http,
    private router: Router,
    private util: UtilService,
    @Inject(APP_CONFIG) appConfig: AppConfig
  ) {
    this.guestProfile = new UserProfile("guest");
    this.$currentUserProfile = new BehaviorSubject(this.guestProfile);
    this.apiBaseUrl = appConfig.apiEndpoint;
    this.lock.on("authenticated", (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.getCurrentUserProfileFromDB();
      this.router.navigateByUrl(authResult.state);
      this.lock.hide();
    });
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
    localStorage.removeItem('id_token');
    this.router.navigate(['/home']);
  }

  public authenticated() {
    return tokenNotExpired();
  }

  public updateCurrentUserProfile(profileData: UserProfile):Observable<UserProfile> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http
      .post(`${this.apiBaseUrl}userProfile/${this.currentUserID}`, profileData, options)
      .map((response) => {
        let res = this.util.extractDataHttpRequest(response)
        if (response.ok) {
          this.$currentUserProfile.next(profileData);
        }
        return res
      })
      .catch(this.util.handleErrorHttpRequest);
  }

  public getCurrentUserProfile() {
    return this.$currentUserProfile.asObservable();
  }

  public getCurrentUserProfileFromDB() {
    if (!localStorage.getItem('id_token') == false) {
      let idToken = localStorage.getItem('id_token')
      this.lock.getProfile(idToken, (error:any, authOProfile: any) => {
        if (error) {
          console.log(error);
        }

        this.currentUserID = authOProfile.identities[0].user_id;

        this.http
          .get(`${this.apiBaseUrl}userProfile/${this.currentUserID}`)
          .map(this.util.extractDataHttpRequest)
          .catch(this.util.handleErrorHttpRequest)
          .subscribe(
            (acc) => {this.$currentUserProfile.next(acc)},
            (err) => {console.log(err)},
            () => {}
          );
      });
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
