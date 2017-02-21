import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchItem } from '../../core/services/search.service';

@Component({
  moduleId: module.id,
  selector: 'search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {

  @Input() searchItem: SearchItem;
  @Output() likeRequest = new EventEmitter<SearchItem>();

  like() {
    this.likeRequest.emit(this.searchItem);
  }
}
