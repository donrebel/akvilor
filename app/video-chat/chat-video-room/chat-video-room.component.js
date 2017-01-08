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
var ChatVideoRoomComponent = (function () {
    function ChatVideoRoomComponent() {
        this.selfEasyrtcid = "";
    }
    ChatVideoRoomComponent.prototype.ngOnInit = function () {
        easyrtc.setSocketUrl(":8080");
        easyrtc.setVideoDims(640, 480);
        easyrtc.setRoomOccupantListener(this.convertListToButtons);
        easyrtc.easyApp("easyrtc.audioVideoSimple", "selfVideo", ["callerVideo"], this.loginSuccess, this.loginFailure);
    };
    ChatVideoRoomComponent.prototype.clearConnectList = function () {
        var otherClientDiv = document.getElementById('otherClients');
        while (otherClientDiv.hasChildNodes()) {
            otherClientDiv.removeChild(otherClientDiv.lastChild);
        }
    };
    ChatVideoRoomComponent.prototype.convertListToButtons = function (roomName, data, isPrimary) {
        this.clearConnectList();
        var otherClientDiv = document.getElementById('otherClients');
        for (var easyrtcid in data) {
            var button = document.createElement('button');
            button.onclick = function (easyrtcid) {
                return function () {
                    this.performCall(easyrtcid);
                };
            }(easyrtcid);
            var label = document.createTextNode(easyrtc.idToName(easyrtcid));
            button.appendChild(label);
            otherClientDiv.appendChild(button);
        }
    };
    ChatVideoRoomComponent.prototype.performCall = function (otherEasyrtcid) {
        easyrtc.hangupAll();
        var successCB = function () { };
        var failureCB = function () { };
        easyrtc.call(otherEasyrtcid, successCB, failureCB);
    };
    ChatVideoRoomComponent.prototype.loginSuccess = function (easyrtcid) {
        this.selfEasyrtcid = easyrtcid;
        document.getElementById("iam").innerHTML = "I am " + easyrtc.cleanId(easyrtcid);
    };
    ChatVideoRoomComponent.prototype.loginFailure = function (errorCode, message) {
        easyrtc.showError(errorCode, message);
    };
    ChatVideoRoomComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chat-video-room',
            templateUrl: 'chat-video-room.component.html',
            styleUrls: ['chat-video-room.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ChatVideoRoomComponent);
    return ChatVideoRoomComponent;
}());
exports.ChatVideoRoomComponent = ChatVideoRoomComponent;
//# sourceMappingURL=chat-video-room.component.js.map