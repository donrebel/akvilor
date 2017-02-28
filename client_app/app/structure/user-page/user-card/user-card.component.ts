import { Component, OnInit, Input } from '@angular/core';

//import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload';
//import OffClickDirective from "../directives/off-click.directive";
//import { Draggable } from '../directives/draggable';
//import { AkvAvatar } from '../../directives/default-avatar';
import { VideoChatService } from '../../../video-chat/services/video-chat.service';

import { UserDataService } from '../services/user-data.service';

import { Utils } from '../services/utils';
import { RatePerMinutePipe } from './user-card.pipes';

import { AuthService } from '../../../auth/auth.service';

import { Router,
         NavigationExtras } from '@angular/router';

import { UserAccount } from '../../../app.models';

const uploadURL = 'http://localhost:8080/profile/';

@Component({
  moduleId: module.id,
  selector: 'app-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: [
    'user-card.component.css'
  ]
})
export class UserCardComponent implements OnInit {
  @Input() accID:string;
  //public uploader:FileUploader = new FileUploader({url: uploadURL});
  //public hasBaseDropZoneOver:boolean = false;
  private test:number = 0;
  public hasAnotherDropZoneOver:boolean = false;

  errorMessage: string;
  isOpenEditUserCardForm: boolean;
  cmodel_userProfile: UserAccount;
  cmodel_userProfile_: UserAccount;

  form_submited = false;

  constructor (
      private userDataService: UserDataService,
      private videoChatService: VideoChatService,
      private utils: Utils,
      public router: Router
  ) {
      this.clickedOutside = this.clickedOutside.bind(this);
  }

  ngOnInit() {
    this.isOpenEditUserCardForm = false;
    this.cmodel_userProfile_get(this.accID);
  }

  cmodel_userProfile_get(accID: string) {
    this.userDataService.getOne(accID)
      .subscribe(
        userProfileDBData => { this.cmodel_userProfile = userProfileDBData },
        error => { this.errorMessage = <any>error }
      );
  }

  cmodel_userProfile_create(userProfileData) {
    this.userDataService.create(userProfileData)
      .subscribe(
        userProfile => {
          this.form_submited = true;
//            this.cmodel_userProfile = userProfile;
        },
        error =>  this.errorMessage = <any>error
      );
  }

  cmodel_userProfile_update(userProfileData) {
    userProfileData.skilltaglist = userProfileData.skilltagstr.split(' ');
    this.userDataService.update(userProfileData)
      .subscribe(
        userProfile => {
          this.form_submited = true;
//          this.cmodel_userProfile_fill(userProfile)
        },
        error =>  this.errorMessage = <any>error
      );
  }

  userCardEditForm_onSubmit() {
    this.cmodel_userProfile_update(this.cmodel_userProfile)
  }

  public fileOverBase(e:any):void {
  //  this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
  //  this.hasAnotherDropZoneOver = e;
  }

  userCardForm_editOpen($event){
    $event.stopPropagation();
    this.cmodel_userProfile_ = this.utils.copyObject(this.cmodel_userProfile);
    this.isOpenEditUserCardForm = true;
  }

  avatar_change($event){
    console.log('Avatar changing');
    this.test = this.test + 1;
    this.videoChatService.openVideoFrame(
      {
        action: "open",
        data: {
          chatLink: 'asd'
        }
      }
    );
  }

  clickedOutside(){
    this.userCardForm_editClose()
    this.form_submited = false;
  }

  userCardForm_editClose(){
    this.isOpenEditUserCardForm = false;
  }
  userCardForm_editCancel(){
    this.cmodel_userProfile = this.utils.copyObject(this.cmodel_userProfile_);
    this.userCardForm_editClose()
  }
  userCardForm_editSave(){
    this.userCardForm_editClose()
  }

}
