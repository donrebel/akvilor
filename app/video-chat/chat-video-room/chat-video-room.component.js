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
        var _this = this;
        this.pc1 = null;
        this.pc2 = null;
        this.offerOptions = {
            offerToReceiveAudio: 1,
            offerToReceiveVideo: 1
        };
        this.start = function () {
            _this.btn1.disabled = true;
            _this.btn2.disabled = false;
            _this.btn3.disabled = false;
            console.log('Starting Call');
            var videoTracks = _this.localstream.getVideoTracks();
            var audioTracks = _this.localstream.getAudioTracks();
            if (videoTracks.length > 0) {
                console.log('Using Video device: ' + videoTracks[0].label);
            }
            if (audioTracks.length > 0) {
                console.log('Using Audio device: ' + audioTracks[0].label);
            }
            var servers = null;
            _this.pc1 = new RTCPeerConnection(servers);
            console.log('Created local peer connection object pc1');
            _this.pc1.onicecandidate = _this.iceCallback1.bind(_this);
            _this.pc2 = new RTCPeerConnection(servers);
            console.log('Created remote peer connection object pc2');
            _this.pc2.onicecandidate = _this.iceCallback2.bind(_this);
            _this.pc2.onaddstream = _this.gotRemoteStream.bind(_this);
            _this.pc1.addStream(_this.localstream);
            console.log('Adding Local Stream to peer connection');
            _this.pc1.createOffer(_this.gotDescription1.bind(_this), _this.onCreateSessionDescriptionError, _this.offerOptions);
        };
        this.stop = function () {
            console.log('Ending Call' + '\n\n');
            _this.pc1.close();
            _this.pc2.close();
            _this.pc1 = null;
            _this.pc2 = null;
            _this.btn2.disabled = true;
            _this.btn1.disabled = false;
            _this.btn3.disabled = true;
        };
        this.accept = function () {
            _this.pc2.createAnswer(_this.gotDescription3.bind(_this), _this.onCreateAnswerError);
            _this.btn2.disabled = true;
            _this.btn1.disabled = false;
        };
        console.log('chat-video-room');
    }
    ChatVideoRoomComponent.prototype.ngOnInit = function () {
        this.vid1 = document.querySelector('#vid1');
        this.vid2 = document.querySelector('#vid2');
        this.btn1 = document.querySelector('#btn1');
        this.btn2 = document.querySelector('#btn2');
        this.btn3 = document.querySelector('#btn3');
        this.btn1.disabled = true;
        this.btn2.disabled = true;
        this.btn3.disabled = true;
        navigator.mediaDevices.getUserMedia({
            audio: true,
            //video: true
            video: { width: { exact: 320 }, height: { exact: 240 } }
        })
            .then(this.gotStream.bind(this))
            .catch(function (e) {
            alert('getUserMedia() error: ' + e);
        });
    };
    ChatVideoRoomComponent.prototype.gotStream = function (stream) {
        console.log('Received local stream');
        this.vid1.srcObject = stream;
        this.localstream = stream;
        this.btn1.disabled = false;
    };
    ChatVideoRoomComponent.prototype.gotRemoteStream = function (e) {
        this.vid2.srcObject = e.stream;
        console.log('Received remote stream');
    };
    ChatVideoRoomComponent.prototype.onCreateSessionDescriptionError = function (error) {
        console.log('Failed to create session description: ' + error.toString());
        this.stop();
    };
    ChatVideoRoomComponent.prototype.onSetLocalDescriptionSuccess = function () {
        console.log('localDescription success.');
    };
    ChatVideoRoomComponent.prototype.onSetLocalDescriptionError = function (error) {
        console.log('Failed to set setLocalDescription: ' + error.toString());
        this.stop();
    };
    ChatVideoRoomComponent.prototype.onCreateAnswerError = function (error) {
        console.log('Failed to set createAnswer: ' + error.toString());
        this.stop();
    };
    ChatVideoRoomComponent.prototype.onAddIceCandidateSuccess = function () {
        console.log('AddIceCandidate success.');
    };
    ChatVideoRoomComponent.prototype.onAddIceCandidateError = function (error) {
        console.log('Failed to add Ice Candidate: ' + error.toString());
    };
    ChatVideoRoomComponent.prototype.gotDescription1 = function (desc) {
        this.pc1.setLocalDescription(desc, this.onSetLocalDescriptionSuccess, this.onSetLocalDescriptionError);
        console.log('Offer from pc1 \n' + desc.sdp);
        this.pc2.setRemoteDescription(desc);
        // Since the 'remote' side has no media stream we need
        // to pass in the right constraints in order for it to
        // accept the incoming offer of audio and video.
        this.pc2.createAnswer(this.gotDescription2.bind(this), this.onCreateSessionDescriptionError);
    };
    ChatVideoRoomComponent.prototype.gotDescription2 = function (desc) {
        // Provisional answer, set a=inactive & set sdp type to pranswer.
        desc.sdp = desc.sdp.replace(/a=recvonly/g, 'a=inactive');
        desc.type = 'pranswer';
        this.pc2.setLocalDescription(desc, this.onSetLocalDescriptionSuccess, this.onSetLocalDescriptionError);
        console.log('Pranswer from pc2 \n' + desc.sdp);
        this.pc1.setRemoteDescription(desc);
    };
    ChatVideoRoomComponent.prototype.gotDescription3 = function (desc) {
        // Final answer, setting a=recvonly & sdp type to answer.
        desc.sdp = desc.sdp.replace(/a=inactive/g, 'a=recvonly');
        desc.type = 'answer';
        this.pc2.setLocalDescription(desc, this.onSetLocalDescriptionSuccess, this.onSetLocalDescriptionError);
        console.log('Answer from pc2 \n' + desc.sdp);
        this.pc1.setRemoteDescription(desc);
    };
    ChatVideoRoomComponent.prototype.iceCallback1 = function (event) {
        if (event.candidate) {
            this.pc2.addIceCandidate(new RTCIceCandidate(event.candidate), this.onAddIceCandidateSuccess, this.onAddIceCandidateError);
            console.log('Local ICE candidate: \n' + event.candidate.candidate);
        }
    };
    ChatVideoRoomComponent.prototype.iceCallback2 = function (event) {
        if (event.candidate) {
            this.pc1.addIceCandidate(new RTCIceCandidate(event.candidate), this.onAddIceCandidateSuccess, this.onAddIceCandidateError);
            console.log('Remote ICE candidate: \n ' + event.candidate.candidate);
        }
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