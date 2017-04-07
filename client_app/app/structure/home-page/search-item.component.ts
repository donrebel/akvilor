import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { IsearchItemUserProfile } from '../../core/services/search.service';
import { UtilService } from '../../core/services/util.service';
import { flyInOut } from './search-item.animation'

@Component({
  moduleId: module.id,
  selector: 'search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css'],
  animations: [ flyInOut ]
})
export class SearchItemComponent implements OnInit {

  @Input() data: IsearchItemUserProfile;
  @Output() likeRequest = new EventEmitter<IsearchItemUserProfile>();

  profileLink: string
  constructor() {
  }

  ngOnInit() {
    if (this.data) {
      this.profileLink = `/${this.data.user_profile_id}`
    }
  }

  like() {
    this.likeRequest.emit(this.data);
  }

}
