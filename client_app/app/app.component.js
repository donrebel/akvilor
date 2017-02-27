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
require('./rxjs-operators');
var auth_service_1 = require('./auth/auth.service');
var video_chat_service_1 = require('./video-chat/services/video-chat.service');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(auth, videoChatService, router) {
        this.auth = auth;
        this.videoChatService = videoChatService;
        this.router = router;
        //private openChatRoom: boolean = false;
        this.chatRooms = [];
        this.currentUserAccountID = '';
        this.currentUserAccountLink = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.videoChatService.getChatRoomInfo().subscribe(function (chatRoomInfo) {
            console.log('chat room for: ', chatRoomInfo.data.chatLink);
            //this.openChatRoom = true;
            _this.chatRooms.push(chatRoomInfo);
        });
        this.videoChatService.getVideoFrameObservable().subscribe(function (chatRoomInfo) {
            if (chatRoomInfo.action == "open") {
                _this.videoFrame = { name: "ww" };
            }
            else {
                _this.videoFrame = false;
            }
        });
        this.auth.getCurrentUserAccount().subscribe(function (acc) {
            _this.currentUserAccountID = acc.id;
            _this.currentUserAccountLink = "/" + _this.currentUserAccountID;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'akvilor',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, video_chat_service_1.VideoChatService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map