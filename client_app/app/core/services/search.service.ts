import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class SearchItem {
  constructor (
    public id: string,
    public name: string
  ) {}
}

@Injectable()
export class SearchService {

  private searchUrl = 'app/searchItems';

  constructor (private http: Http) {}

  // search(term: string): Observable<string[]> {
  //   let res = ['a', 'b', 'c'];
  //   return Observable.of(res).delay(1000);
  // }

  search(term: string): Observable<SearchItem[]> {
    return this.http.get(this.searchUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  searchAddItem(item: SearchItem): Observable<SearchItem[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.searchUrl, item, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  handleError(error: Response | any) {
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

  // login(): Observable<boolean> {
  //   return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  // }

}
