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
var video_chat_routing_1 = require('./video-chat.routing');
var chat_room_component_1 = require('./chat-room/chat-room.component');
var chat_video_room_component_1 = require('./chat-video-room/chat-video-room.component');
var video_chat_service_1 = require('./services/video-chat.service');
//import * as r from 'webrtc-adapter';
var VideoChatModule = (function () {
    function VideoChatModule() {
    }
    VideoChatModule = __decorate([
        core_1.NgModule({
            imports: [
                video_chat_routing_1.chatRouting
            ],
            declarations: [
                chat_room_component_1.ChatRoomComponent,
                chat_video_room_component_1.ChatVideoRoomComponent
            ],
            exports: [
                chat_room_component_1.ChatRoomComponent,
                chat_video_room_component_1.ChatVideoRoomComponent
            ],
            providers: [
                video_chat_service_1.VideoChatService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], VideoChatModule);
    return VideoChatModule;
}());
exports.VideoChatModule = VideoChatModule;
//# sourceMappingURL=video-chat.module.js.map