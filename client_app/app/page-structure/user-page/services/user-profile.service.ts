import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Response, RequestOptions, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { APP_CONFIG, AppConfig } from '../../../app-config';
import { User } from '../models/user';

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

  private baseUrl: string;

  constructor(
    @Inject(APP_CONFIG) appConfig: AppConfig,
    private authHttp: AuthHttp
  ) {
    //this.baseUrl  = '//localhost:3000/api';
    this.baseUrl = appConfig.apiEndpoint;
  }

  userProfile_getAll(){}

  getOne(id: any): Observable<UserProfile[]> {
    return this.authHttp
      .get(`${this.baseUrl}/v1/user/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  create(inputData: UserProfile): Observable<UserProfile> {
    let body = JSON.stringify({data: inputData});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.authHttp
      .post(`${this.baseUrl}/v1/user`, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  update(inputData: UserProfile): Observable<UserProfile> {
    let body = JSON.stringify({data: inputData});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.authHttp
      .put(`${this.baseUrl}/v1/user/${inputData._id}`, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  remove(id: any): Observable<UserProfile> {
    return this.authHttp
      .delete(`${this.baseUrl}/v1/user/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
