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
var video_chat_service_1 = require('../services/video-chat.service');
var ChatVideoRoomComponent = (function () {
    function ChatVideoRoomComponent(cdr, videoChatService) {
        this.cdr = cdr;
        this.videoChatService = videoChatService;
        this.myEasyRTCid = '';
        this.remoteEasyRTCId = '';
        this.viewState = '';
        this.videoModeToggle = false;
        this.connectedClientsList = [];
        this.template = {
            connectButton: {
                disabled: false
            },
            disconnectButton: {
                disabled: true
            },
            callButton: {
                disabled: true
            },
            hangupButton: {
                disabled: true
            },
            acceptCallBox: {
                display: "none"
            },
            acceptCallLabel: {
                innerHTML: ""
            }
        };
    }
    ChatVideoRoomComponent.prototype.clearConnectionList = function () {
        this.connectedClientsList = [];
        this.cdr.detectChanges();
    };
    // performCall = (otherEasyrtcid:string):void => {
    //      easyrtc.hangupAll();
    //      let successCB = function() {
    //        this.viewState = "active";
    //        console.log(otherEasyrtcid);
    //      };
    //      var failureCB = function() {};
    //      easyrtc.call(otherEasyrtcid, successCB.bind(this), failureCB);
    // }
    ChatVideoRoomComponent.prototype.buildCaller = function (easyrtcid) {
        var _this = this;
        return function () {
            _this.performCall(easyrtcid);
        };
    };
    ChatVideoRoomComponent.prototype.easyrtcCallSuccessCB = function () {
        //this.template.hangupButton.disabled = false;
        this.viewState = "active";
    };
    ChatVideoRoomComponent.prototype.easyrtcCallFailureCB = function () {
        this.template.hangupButton.disabled = true;
        this.template.callButton.disabled = false;
    };
    ChatVideoRoomComponent.prototype.easyrtcCallAcceptedCB = function (accepted, easyrtcid) {
        if (!accepted) {
            easyrtc.showError("CALL-REJECTED", "Sorry, your call to " + easyrtc.idToName(easyrtcid) + " was rejected");
            this.template.callButton.disabled = false;
        }
    };
    ChatVideoRoomComponent.prototype.performCall = function () {
        var _this = this;
        var otherEasyrtcid = this.connectedClientsList[0];
        this.remoteEasyRTCId = otherEasyrtcid;
        easyrtc.hangupAll();
        console.log('call');
        console.log(otherEasyrtcid);
        // var acceptedCB = function(accepted, easyrtcid) {
        //   if( !accepted ) {
        //     easyrtc.showError("CALL-REJECTED", "Sorry, your call to " + easyrtc.idToName(easyrtcid) + " was rejected");
        //     enable("otherClients");
        //   }
        // };
        // var successCB = function() {
        //   enable("hangupButton");
        // };
        // var failureCB = function() {
        //   enable("otherClients");
        // };
        easyrtc.call(otherEasyrtcid, function () {
            _this.easyrtcCallSuccessCB();
        }, function () {
            _this.easyrtcCallFailureCB();
        }, function (accepted, easyrtcid) {
            _this.easyrtcCallAcceptedCB(accepted, easyrtcid);
        });
    };
    ChatVideoRoomComponent.prototype.convertListToButtons = function (roomName, data, isPrimary) {
        this.clearConnectionList();
        for (var easyrtcid in data) {
            this.connectedClientsList.push(easyrtc.idToName(easyrtcid));
        }
        this.cdr.detectChanges();
    };
    ChatVideoRoomComponent.prototype.updateMyEasyRTCId = function (myEasyRTCid) {
        this.myEasyRTCid = myEasyRTCid;
        this.cdr.detectChanges();
    };
    // loginSuccess(easyrtcid:string):void {
    //   this.updateMyEasyRTCId(easyrtc.cleanId(easyrtcid));
    //   this.template.connectButton.disabled = true;
    //   // enable("disconnectButton");
    //   //this.enable("otherClients");
    // }
    // loginFailure(errorCode:string, message:string):void {
    //   this.updateMyEasyRTCId('Login failed. Reason: ' + message);
    // }
    ChatVideoRoomComponent.prototype.easyrtcConnectSuccessCB = function (easyrtcid) {
        this.updateMyEasyRTCId(easyrtc.cleanId(easyrtcid));
        this.template.connectButton.disabled = true;
        this.template.callButton.disabled = false;
        this.template.disconnectButton.disabled = false;
    };
    ChatVideoRoomComponent.prototype.easyrtcConnectFailureCB = function (errorCode, message) {
        easyrtc.showError(errorCode, message);
    };
    ChatVideoRoomComponent.prototype.initMediaSourceSuccessCB = function () {
        var _this = this;
        easyrtc.setVideoObjectSrc(document.getElementById("local-video"), easyrtc.getLocalStream());
        var easyrtcConnectSuccessCBShim = function (easyrtcid) {
            _this.easyrtcConnectSuccessCB(easyrtcid);
        };
        var easyrtcConnectFailureCBShim = function (errorCode, message) {
            _this.easyrtcConnectFailureCB(errorCode, message);
        };
        easyrtc.connect("easyrtc.videoOnly", easyrtcConnectSuccessCBShim, easyrtcConnectFailureCBShim);
    };
    ChatVideoRoomComponent.prototype.easyrtcSetStreamAcceptorCB = function (easyrtcid, stream) {
        easyrtc.setVideoObjectSrc(document.getElementById("remote-video"), stream);
        console.log("saw video from " + easyrtcid);
        this.template.hangupButton.disabled = false;
        this.cdr.detectChanges();
    };
    ChatVideoRoomComponent.prototype.easyrtcSetOnStreamClosedCB = function (easyrtcid) {
        easyrtc.setVideoObjectSrc(document.getElementById("remote-video"), "");
        this.template.hangupButton.disabled = true;
        this.viewState = "";
        this.cdr.detectChanges();
    };
    ChatVideoRoomComponent.prototype.callHandleBuilder = function (wasAccepted, callback) {
        var _this = this;
        return function () {
            _this.template.acceptCallBox.display = "none";
            if (wasAccepted && easyrtc.getConnectionCount() > 0) {
                easyrtc.hangupAll();
            }
            callback(wasAccepted);
            if (wasAccepted) {
                _this.viewState = "active";
            }
        };
    };
    ChatVideoRoomComponent.prototype.easyrtcSetAcceptCheckerCB = function (easyrtcid, callback) {
        this.template.acceptCallBox.display = "block";
        this.cdr.detectChanges();
        if (easyrtc.getConnectionCount() > 0) {
            this.template.acceptCallLabel.innerHTML = "Drop current call and accept new from " + easyrtc.idToName(easyrtcid) + " ?";
        }
        else {
            this.template.acceptCallLabel.innerHTML = "Accept incoming call from " + easyrtc.idToName(easyrtcid) + " ?";
        }
        document.getElementById("callAcceptButton").onclick = this.callHandleBuilder(true, callback);
        document.getElementById("callRejectButton").onclick = this.callHandleBuilder(false, callback);
    };
    ChatVideoRoomComponent.prototype.connect = function () {
        var _this = this;
        easyrtc.setSocketUrl(":8080");
        easyrtc.enableDebug(false);
        console.log("Initializing.");
        easyrtc.enableAudio(false);
        easyrtc.enableAudioReceive(false);
        easyrtc.setStreamAcceptor(function (easyrtcid, stream) {
            _this.easyrtcSetStreamAcceptorCB(easyrtcid, stream);
        });
        easyrtc.setOnStreamClosed(function (easyrtcid) {
            _this.easyrtcSetOnStreamClosedCB(easyrtcid);
        });
        easyrtc.setAcceptChecker(function (easyrtcid, callback) {
            _this.easyrtcSetAcceptCheckerCB(easyrtcid, callback);
        });
        var convertListToButtonShim = function (roomName, data, isPrimary) {
            _this.convertListToButtons(roomName, data, isPrimary);
        };
        easyrtc.setRoomOccupantListener(convertListToButtonShim);
        var initMediaSourceSuccessCBShim = function () {
            _this.initMediaSourceSuccessCB();
        };
        easyrtc.initMediaSource(initMediaSourceSuccessCBShim);
    };
    ChatVideoRoomComponent.prototype.ngOnInit = function () {
        this.connect();
    };
    ChatVideoRoomComponent.prototype.hangup = function () {
        console.log("hangup all");
        easyrtc.hangupAll();
        this.template.hangupButton.disabled = true;
    };
    ChatVideoRoomComponent.prototype.disconnect = function () {
        easyrtc.disconnect();
        console.log("disconnecting from server");
        this.template.connectButton.disabled = false;
        this.clearConnectionList();
        easyrtc.setVideoObjectSrc(document.getElementById("local-video"), "");
        easyrtc.closeLocalMediaStream();
        this.videoChatService.closeVideoFrame();
    };
    // canDeactivate function seems to be does not calling from CanDeactivateGuard
    ChatVideoRoomComponent.prototype.canDeactivate = function () {
        console.log("DEACTIVATING");
        easyrtc.disconnect();
        return true;
    };
    ChatVideoRoomComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chat-video-room',
            templateUrl: 'chat-video-room.component.html',
            styleUrls: ['chat-video-room.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, video_chat_service_1.VideoChatService])
    ], ChatVideoRoomComponent);
    return ChatVideoRoomComponent;
}());
exports.ChatVideoRoomComponent = ChatVideoRoomComponent;
//# sourceMappingURL=chat-video-room.component.js.map