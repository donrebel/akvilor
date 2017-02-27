import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { APP_CONFIG, AppConfig } from '../../app-config';
import { UtilService } from './util.service';

export class SearchItem {
  constructor (
    public id: string,
    public name: string
  ) {}
}

@Injectable()
export class SearchService {

  private apiBaseUrl: string;

  constructor (
    @Inject(APP_CONFIG) appConfig: AppConfig,
    private http: Http,
    private util: UtilService
  ) {
    this.apiBaseUrl = appConfig.apiEndpoint;
  }

  search(term: string): Observable<SearchItem[]> {
    return this.http.get(`${this.apiBaseUrl}searchItems`)
                    .map(this.util.extractDataHttpRequest)
                    .catch(this.util.handleErrorHttpRequest);
  }

  searchAddItem(item: SearchItem): Observable<SearchItem[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.apiBaseUrl}searchItems`, item, options)
                    .map(this.util.extractDataHttpRequest)
                    .catch(this.util.handleErrorHttpRequest);
  }
}
