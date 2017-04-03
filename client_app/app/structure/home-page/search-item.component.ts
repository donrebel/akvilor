import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IsearchItemUserProfile } from '../../core/services/search.service';

@Component({
  moduleId: module.id,
  selector: 'search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {

  @Input() data: IsearchItemUserProfile;
  @Output() likeRequest = new EventEmitter<IsearchItemUserProfile>();

  like() {
    this.likeRequest.emit(this.data);
  }
}
