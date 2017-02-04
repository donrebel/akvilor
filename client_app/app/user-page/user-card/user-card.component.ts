import { Component, OnInit, Input } from '@angular/core';

//import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload';
//import OffClickDirective from "../directives/off-click.directive";
//import { Draggable } from '../directives/draggable';
//import { AkvAvatar } from '../../directives/default-avatar';
import { VideoChatService } from '../../video-chat/services/video-chat.service';
import { UserProfileService } from '../services/user-profile.service';
import { Utils } from '../services/utils';
import { RatePerMinutePipe } from './user-card.pipes';

import { Router,
         NavigationExtras } from '@angular/router';

const uploadURL = 'http://localhost:8080/profile/';
class CModel_UserProfile {
  _id: string;
  userName: string;
  personName: string;
  email: string;
  synopsis: string;
  ratePerMinute: number;
  likes: number;
  skilltaglist: string[];
  errorMessage: string;
  skilltagstr: string;

  constructor(userProfileData) {
    this._id = userProfileData._id;
    this.userName = userProfileData.userName;
    this.personName = userProfileData.personName;
    this.email = userProfileData.email;
    this.synopsis = userProfileData.synopsis;
    this.ratePerMinute = userProfileData.ratePerMinute;
    this.likes = userProfileData.likes;
    this.skilltaglist = userProfileData.skilltaglist;
    this.skilltagstr = this.skilltaglist.join(' ');
/*  public avatarPicture?: string,
    public canvasPicture?: string */
  }
};
@Component({
  moduleId: module.id,
  selector: 'app-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: [
    'user-card.component.css'
  ]
})
export class UserCardComponent implements OnInit {
  @Input() userName:string;
  //public uploader:FileUploader = new FileUploader({url: uploadURL});
  //public hasBaseDropZoneOver:boolean = false;
private test:number = 0;
  public hasAnotherDropZoneOver:boolean = false;

  errorMessage: string;
  isOpenEditUserCardForm: boolean;
  cmodel_userProfile: CModel_UserProfile;
  cmodel_userProfile_: CModel_UserProfile;
  form_submited = false;

  constructor (
      private userProfileService: UserProfileService,
      private videoChatService: VideoChatService,
      private utils: Utils,
      public router: Router
  ) {
      this.clickedOutside = this.clickedOutside.bind(this);
  }

  ngOnInit() {
    this.isOpenEditUserCardForm = false;
    this.cmodel_userProfile_get(this.userName);
  }

  cmodel_userProfile_get(userName: string) {
    this.userProfileService.getOne(userName)
      .subscribe(
        userProfileDBData => {
          if (userProfileDBData.length > 0) {
            this.cmodel_userProfile = new CModel_UserProfile(userProfileDBData[0]);
          } else {
            this.cmodel_userProfile = new CModel_UserProfile({
              userName:'cimmerian',
              personName: 'Maksym Kovalenko',
              email: 'max.y.kovalenko@gmail.com',
              synopsis: 'LOREM IPSUM DOLOR SIT AMET, ETIAM LOREM ADIPISCING ELIT. CRAS TURPIS ANTE, NULLAM SIT AMET TURPIS NON, SOLLICITUDIN POSUERE URNA. MAURIS ID TELLUS ARCU. NUNC VEHICULA ID NULLA DIGNISSIM DAPIBUS. NULLAM ULTRICES, NEQUE ET FAUCIBUS VIVERRA, EX NULLA CURSUS',
              ratePerMinute: 101,
              likes:0
            });
          }
        },
        error =>  this.errorMessage = <any>error
      );
  }

  cmodel_userProfile_create(userProfileData) {
    this.userProfileService.create(userProfileData)
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
    this.userProfileService.update(userProfileData)
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
    //this.videoChatService.setChatRoomInfo({chatLink: 'asd' + this.test});
    this.videoChatService.openVideoFrame(
      {
        action: "open",
        data: {
          chatLink: 'asd'
        }
      }
    );
    //this.videoChatService.runVideoChatApp({socket:'',targetId:''});

    //this.router.navigate(['/video-chat']);

    /*$event.stopPropagation();
    this.cmodel_userProfile_ = this.utils.copyObject(this.cmodel_userProfile);
    this.isOpenEditUserCardForm = true;*/
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
    //this.cData.skilltaglist = this.cData.skilltagstr.split(' ');
    //this.model.skilltaglist = this.model.skilltagstr.split(' ');
    this.userCardForm_editClose()
  }

}
