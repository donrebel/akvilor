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
require('./rxjs-operators');
var _ = require('lodash');
var auth_service_1 = require('./auth/auth.service');
var video_chat_service_1 = require('./video-chat/services/video-chat.service');
var chat_example_data_1 = require('./chat/c-data/chat-example-data');
var users_service_1 = require('./chat/user/users.service');
var threads_service_1 = require('./chat/thread/threads.service');
var messages_service_1 = require('./chat/message/messages.service');
var AppComponent = (function () {
    function AppComponent(auth, router, usersService, messagesService, threadsService, videoChatService) {
        this.auth = auth;
        this.router = router;
        this.usersService = usersService;
        this.messagesService = messagesService;
        this.threadsService = threadsService;
        this.videoChatService = videoChatService;
        this.chatRooms = [];
        this.currentUserProfileID = '';
        this.currentUserProfileLink = '';
        chat_example_data_1.ChatExampleData.init(messagesService, threadsService, usersService);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messagesService.messages
            .combineLatest(this.threadsService.currentThread, function (messages, currentThread) {
            return [currentThread, messages];
        })
            .subscribe(function (_a) {
            var currentThread = _a[0], messages = _a[1];
            _this.unreadMessagesCount =
                _.reduce(messages, function (sum, m) {
                    var messageIsInCurrentThread = m.thread &&
                        currentThread &&
                        (currentThread.id === m.thread.id);
                    // note: in a "real" app you should also exclude
                    // messages that were authored by the current user b/c they've
                    // already been "read"
                    if (m && !m.isRead && !messageIsInCurrentThread) {
                        sum = sum + 1;
                    }
                    return sum;
                }, 0);
        });
        this.videoChatService.getChatRoomInfo().subscribe(function (chatRoomInfo) {
            console.log('chat room for: ', chatRoomInfo.data.chatLink);
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
        this.auth.getCurrentUserProfileFromDB();
    };
    AppComponent.prototype.test = function () {
        var c = this.auth.authenticated();
        console.log(c);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'akvilor',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, users_service_1.UsersService, messages_service_1.MessagesService, threads_service_1.ThreadsService, video_chat_service_1.VideoChatService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map