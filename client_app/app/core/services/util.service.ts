import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UtilService {

  extractDataHttpRequest(response: Response) {
    let result = { };
    if (response.status < 200 || response.status >= 300) {
        throw new Error('Bad response status: ' + response.status);
    }
    let body = response.json();
    if (body != null) {
      result = body.data || { };
    }
    return result;
  }

  handleErrorHttpRequest(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getNativeWindow() {
    return window
  }

}
