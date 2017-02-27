import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Response, RequestOptions, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { APP_CONFIG, AppConfig } from '../../../app-config';
import { User } from '../models/user';
import { UtilService } from '../../../core/services/util.service';

interface UserProfile{
  userName:string,
  personName:string,
  email:string,
  avatarPicture:string,
  canvasPicture:string,
  synopsis:string,
  skilltaglist:[string],
  _id?: string
}

@Injectable()
export class UserProfileService {

  private apiBaseUrl: string;
  private apiUrl: string;

  constructor(
    @Inject(APP_CONFIG) appConfig: AppConfig,
    private authHttp: AuthHttp,
    private util: UtilService
  ) {
    this.apiBaseUrl = appConfig.apiEndpoint;
//  this.apiUrl = `${this.apiBaseUrl}/v1/user`;
    this.apiUrl = `${this.apiBaseUrl}/userAccount`;
  }

  userProfile_getAll(){}

  getOne(id: any): Observable<UserProfile[]> {
    return this.authHttp
      .get(`${this.apiUrl}/${id}`)
      .map(this.util.extractDataHttpRequest)
      .catch(this.util.handleErrorHttpRequest);
  }

  create(inputData: UserProfile): Observable<UserProfile> {
    let body = JSON.stringify({data: inputData});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.authHttp
      .post(this.apiUrl, body, options)
      .map(this.util.extractDataHttpRequest)
      .catch(this.util.handleErrorHttpRequest);
  }

  update(inputData: UserProfile): Observable<UserProfile> {
    let body = JSON.stringify({data: inputData});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.authHttp
      .put(`${this.apiUrl}/${inputData._id}`, body, options)
      .map(this.util.extractDataHttpRequest)
      .catch(this.util.handleErrorHttpRequest);
  }

  remove(id: any): Observable<UserProfile> {
    return this.authHttp
      .delete(`${this.apiUrl}/${id}`)
      .map(this.util.extractDataHttpRequest)
      .catch(this.util.handleErrorHttpRequest);
  }

}
