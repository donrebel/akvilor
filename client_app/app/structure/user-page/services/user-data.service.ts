import { Injectable, Inject } from '@angular/core';
import { Response, RequestOptions, Http, Headers } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import { APP_CONFIG, AppConfig } from '../../../app-config';
import { UserProfile } from '../../../app.models';
import { UtilService } from '../../../core/services/util.service';

@Injectable()
export class UserDataService {

  private apiBaseUrl: string;
  private apiUrl: string;

  constructor (
    @Inject(APP_CONFIG) appConfig: AppConfig,
    private authHttp: AuthHttp,
    private util: UtilService
  ) {
    this.apiBaseUrl = appConfig.apiEndpoint;
    this.apiUrl = `${this.apiBaseUrl}userProfile`;
  }

  getOne(id: any): Observable<UserProfile> {
    return this.authHttp
      .get(`${this.apiUrl}/${id}`)
      .map(this.util.extractDataHttpRequest)
      .catch(this.util.handleErrorHttpRequest);
  }

  getUserProfileData(id: any): Observable<UserProfile> {
    return this.authHttp
      .get(`${this.apiBaseUrl}userProfile/${id}`)
      .map(this.util.extractDataHttpRequest)
      .catch(this.util.handleErrorHttpRequest);
  }


  create(accInfo): Observable<UserProfile> {
    let body = JSON.stringify({data: accInfo});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.authHttp
      .post(this.apiUrl, body, options)
      .map(this.util.extractDataHttpRequest)
      .catch(this.util.handleErrorHttpRequest);
  }

  update(accInfo): Observable<UserProfile> {
    let body = JSON.stringify({data: accInfo});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.authHttp
      .put(`${this.apiUrl}/${accInfo.id}`, body, options)
      .map(this.util.extractDataHttpRequest)
      .catch(this.util.handleErrorHttpRequest);
  }


}
