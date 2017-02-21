import { Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { SearchService, SearchItem } from '../../core/services/search.service';
import { SearchItemComponent } from './search-item.component';

@Component({
  moduleId: module.id,
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public items = new Observable<SearchItem[]>();
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

  like(searchItem: SearchItem) {
    console.log(searchItem);
  }
}
