"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload';
//import OffClickDirective from "../directives/off-click.directive";
//import { Draggable } from '../directives/draggable';
//import { AkvAvatar } from '../../directives/default-avatar';
var user_profile_service_1 = require('../services/user-profile.service');
var utils_1 = require('../services/utils');
var router_1 = require('@angular/router');
var uploadURL = 'http://localhost:8080/profile/';
var CModel_UserProfile = (function () {
    function CModel_UserProfile(userProfileData) {
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
    return CModel_UserProfile;
}());
;
var UserCardComponent = (function () {
    function UserCardComponent(userProfileService, utils, router) {
        this.userProfileService = userProfileService;
        this.utils = utils;
        this.router = router;
        //public uploader:FileUploader = new FileUploader({url: uploadURL});
        //public hasBaseDropZoneOver:boolean = false;
        this.hasAnotherDropZoneOver = false;
        this.form_submited = false;
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    UserCardComponent.prototype.ngOnInit = function () {
        this.isOpenEditUserCardForm = false;
        this.cmodel_userProfile_get(this.userName);
    };
    UserCardComponent.prototype.cmodel_userProfile_get = function (userName) {
        var _this = this;
        this.userProfileService.getOne(userName)
            .subscribe(function (userProfileDBData) {
            if (userProfileDBData.length > 0) {
                _this.cmodel_userProfile = new CModel_UserProfile(userProfileDBData[0]);
            }
            else {
                _this.cmodel_userProfile = new CModel_UserProfile({
                    userName: 'cimmerian',
                    personName: 'Maksym Kovalenko',
                    email: 'max.y.kovalenko@gmail.com',
                    synopsis: 'LOREM IPSUM DOLOR SIT AMET, ETIAM LOREM ADIPISCING ELIT. CRAS TURPIS ANTE, NULLAM SIT AMET TURPIS NON, SOLLICITUDIN POSUERE URNA. MAURIS ID TELLUS ARCU. NUNC VEHICULA ID NULLA DIGNISSIM DAPIBUS. NULLAM ULTRICES, NEQUE ET FAUCIBUS VIVERRA, EX NULLA CURSUS',
                    ratePerMinute: 101,
                    likes: 0
                });
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    UserCardComponent.prototype.cmodel_userProfile_create = function (userProfileData) {
        var _this = this;
        this.userProfileService.create(userProfileData)
            .subscribe(function (userProfile) {
            _this.form_submited = true;
            //            this.cmodel_userProfile = userProfile;
        }, function (error) { return _this.errorMessage = error; });
    };
    UserCardComponent.prototype.cmodel_userProfile_update = function (userProfileData) {
        var _this = this;
        userProfileData.skilltaglist = userProfileData.skilltagstr.split(' ');
        this.userProfileService.update(userProfileData)
            .subscribe(function (userProfile) {
            _this.form_submited = true;
            //          this.cmodel_userProfile_fill(userProfile)
        }, function (error) { return _this.errorMessage = error; });
    };
    UserCardComponent.prototype.userCardEditForm_onSubmit = function () {
        this.cmodel_userProfile_update(this.cmodel_userProfile);
    };
    UserCardComponent.prototype.fileOverBase = function (e) {
        //  this.hasBaseDropZoneOver = e;
    };
    UserCardComponent.prototype.fileOverAnother = function (e) {
        //  this.hasAnotherDropZoneOver = e;
    };
    UserCardComponent.prototype.userCardForm_editOpen = function ($event) {
        $event.stopPropagation();
        this.cmodel_userProfile_ = this.utils.copyObject(this.cmodel_userProfile);
        this.isOpenEditUserCardForm = true;
    };
    UserCardComponent.prototype.avatar_change = function ($event) {
        console.log('Avatar changing');
        this.router.navigate(['/video-chat']);
        /*$event.stopPropagation();
        this.cmodel_userProfile_ = this.utils.copyObject(this.cmodel_userProfile);
        this.isOpenEditUserCardForm = true;*/
    };
    UserCardComponent.prototype.clickedOutside = function () {
        this.userCardForm_editClose();
        this.form_submited = false;
    };
    UserCardComponent.prototype.userCardForm_editClose = function () {
        this.isOpenEditUserCardForm = false;
    };
    UserCardComponent.prototype.userCardForm_editCancel = function () {
        this.cmodel_userProfile = this.utils.copyObject(this.cmodel_userProfile_);
        this.userCardForm_editClose();
    };
    UserCardComponent.prototype.userCardForm_editSave = function () {
        //this.cData.skilltaglist = this.cData.skilltagstr.split(' ');
        //this.model.skilltaglist = this.model.skilltagstr.split(' ');
        this.userCardForm_editClose();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], UserCardComponent.prototype, "userName", void 0);
    UserCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-user-card',
            templateUrl: 'user-card.component.html',
            styleUrls: [
                'user-card.component.css'
            ]
        }), 
        __metadata('design:paramtypes', [user_profile_service_1.UserProfileService, utils_1.Utils, router_1.Router])
    ], UserCardComponent);
    return UserCardComponent;
}());
exports.UserCardComponent = UserCardComponent;
//# sourceMappingURL=user-card.component.js.map