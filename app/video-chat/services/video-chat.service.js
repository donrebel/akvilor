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
var Subject_1 = require('rxjs/Subject');
var angular2_jwt_1 = require('angular2-jwt');
var VideoChatService = (function () {
    function VideoChatService(authHttp) {
        this.authHttp = authHttp;
        this.subject = new Subject_1.Subject();
        this.videoFrameSubject = new Subject_1.Subject();
        this.apiBaseUrl = '//localhost:3003';
    }
    VideoChatService.prototype.setChatRoomInfo = function (chatRoomInfo) {
        this.chatRoomInfo = chatRoomInfo;
        this.subject.next(chatRoomInfo);
    };
    VideoChatService.prototype.getChatRoomInfo = function () {
        return this.subject.asObservable();
    };
    VideoChatService.prototype.runVideoChatApp = function (connectionInfo) {
        // 1. write connectionInfo to the DB
        // 2. get objectId of created connectionInfo object in DB
        // 3. open videoChatApp in the new window with objectId as a parameter
        var connectionObjectId = '123';
        window.open(this.apiBaseUrl + "/call/" + connectionObjectId, "MsgWindow", "width=640, height=480");
    };
    VideoChatService.prototype.openVideoFrame = function (chatRoomInfo) {
        this.videoFrameSubject.next({
            action: "open",
            data: {
                chatLink: "asd"
            }
        });
    };
    VideoChatService.prototype.closeVideoFrame = function () {
        this.videoFrameSubject.next({
            action: "close",
            data: {
                chatLink: "asd"
            }
        });
    };
    VideoChatService.prototype.getVideoFrameObservable = function () {
        return this.videoFrameSubject.asObservable();
    };
    VideoChatService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], VideoChatService);
    return VideoChatService;
}());
exports.VideoChatService = VideoChatService;
//# sourceMappingURL=video-chat.service.js.map