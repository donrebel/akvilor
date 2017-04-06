import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { IsearchItemUserProfile } from '../../core/services/search.service';
import { UtilService } from '../../core/services/util.service';

@Component({
  moduleId: module.id,
  selector: 'search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  @Input() data: IsearchItemUserProfile;
  @Output() likeRequest = new EventEmitter<IsearchItemUserProfile>();

  profileLink: string
  // nativeWindow: any
  constructor(private util: UtilService) {
    // this.nativeWindow = util.getNativeWindow();
  }

  ngOnInit() {
    if (this.data) {
      this.profileLink = `/${this.data.user_profile_id}`
    }
  }

  like() {
    this.likeRequest.emit(this.data);
  }

  // openUserProfilePage(): void {
  //   this.nativeWindow.open(`/${this.data.user_profile_id}`);
  // }

}
