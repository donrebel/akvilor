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
var ChatRoomComponent = (function () {
    function ChatRoomComponent() {
        console.log('chat-room');
    }
    ChatRoomComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chat-room',
            templateUrl: 'chat-room.component.html',
            styleUrls: ['chat-room.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ChatRoomComponent);
    return ChatRoomComponent;
}());
exports.ChatRoomComponent = ChatRoomComponent;
//# sourceMappingURL=chat-room.component.js.map