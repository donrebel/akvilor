import { Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { SearchService } from '../../core/services/search.service';

@Component({
  moduleId: module.id,
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public items = new Observable<string[]>();
  private searchTermStream = new Subject<string>();

  constructor(private searchService: SearchService) {}

  search(term:string):void {
    this.searchTermStream.next(term);
  }

  ngOnInit() {
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.searchService.search(term));
  }

}
