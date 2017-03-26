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
var router_1 = require('@angular/router');
//import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload';
//import OffClickDirective from "../directives/off-click.directive";
//import { Draggable } from '../directives/draggable';
//import { AkvAvatar } from '../../directives/default-avatar';
var video_chat_service_1 = require('../../../video-chat/services/video-chat.service');
var user_data_service_1 = require('../services/user-data.service');
var uploadURL = 'http://localhost:8080/profile/';
var UserCardComponent = (function () {
    function UserCardComponent(userDataService, videoChatService, router) {
        this.userDataService = userDataService;
        this.videoChatService = videoChatService;
        this.router = router;
        this.test = 0;
        this.hasAnotherDropZoneOver = false;
        this.form_submited = false;
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    UserCardComponent.prototype.ngOnInit = function () {
        this.isOpenEditUserCardForm = false;
        this.cmodel_userProfile_get(this.accID);
    };
    UserCardComponent.prototype.cmodel_userProfile_get = function (accID) {
        var _this = this;
        this.userDataService.getOne(accID)
            .subscribe(function (userProfileDBData) { _this.cmodel_userProfile = userProfileDBData; }, function (error) { _this.errorMessage = error; });
    };
    UserCardComponent.prototype.cmodel_userProfile_create = function (userProfileData) {
        var _this = this;
        this.userDataService.create(userProfileData)
            .subscribe(function (userProfile) {
            _this.form_submited = true;
            //            this.cmodel_userProfile = userProfile;
        }, function (error) { return _this.errorMessage = error; });
    };
    UserCardComponent.prototype.cmodel_userProfile_update = function (userProfileData) {
        var _this = this;
        userProfileData.skilltaglist = userProfileData.skilltagstr.split(' ');
        this.userDataService.update(userProfileData)
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
        // this.cmodel_userProfile_ = this.utils.copyObject(this.cmodel_userProfile);
        this.isOpenEditUserCardForm = true;
    };
    UserCardComponent.prototype.avatar_change = function ($event) {
        console.log('Avatar changing');
        this.test = this.test + 1;
        this.videoChatService.openVideoFrame({
            action: "open",
            data: {
                chatLink: 'asd'
            }
        });
    };
    UserCardComponent.prototype.clickedOutside = function () {
        this.userCardForm_editClose();
        this.form_submited = false;
    };
    UserCardComponent.prototype.userCardForm_editClose = function () {
        this.isOpenEditUserCardForm = false;
    };
    UserCardComponent.prototype.userCardForm_editCancel = function () {
        // this.cmodel_userProfile = this.utils.copyObject(this.cmodel_userProfile_);
        this.userCardForm_editClose();
    };
    UserCardComponent.prototype.userCardForm_editSave = function () {
        this.userCardForm_editClose();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], UserCardComponent.prototype, "accID", void 0);
    UserCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-user-card',
            templateUrl: 'user-card.component.html',
            styleUrls: [
                'user-card.component.css'
            ],
            providers: [
                user_data_service_1.UserDataService
            ]
        }), 
        __metadata('design:paramtypes', [user_data_service_1.UserDataService, video_chat_service_1.VideoChatService, router_1.Router])
    ], UserCardComponent);
    return UserCardComponent;
}());
exports.UserCardComponent = UserCardComponent;
//# sourceMappingURL=user-card.component.js.map