import {Component, ChangeDetectorRef, OnInit} from '@angular/core';
import { VideoChatService } from '../services/video-chat.service';

@Component({
  moduleId: module.id,
  selector: 'chat-video-room',
  templateUrl: 'chat-video-room.component.html',
  styleUrls: ['chat-video-room.component.css']
})

export class ChatVideoRoomComponent implements OnInit{

  constructor(
    private cdr: ChangeDetectorRef,
    private videoChatService: VideoChatService
  ) { }

  myEasyRTCid = '';
  remoteEasyRTCId = '';
  viewState = '';
  videoModeToggle = false;
  connectedClientsList: Array<string> = [];
  template = {
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
    acceptCallLabel:{
      innerHTML: ""
    }
  }

  ngOnInit() {
    this.connect();
  }

  connectSuccessCB(easyrtcid:string):void {
    this.updateMyEasyRTCId(easyrtc.cleanId(easyrtcid));
    this.template.connectButton.disabled = true;
    this.template.callButton.disabled = false;
    this.template.disconnectButton.disabled = false;
  }

  connectFailureCB(errorCode:string, message:string):void {
    easyrtc.showError(errorCode, message);
  }

  initMediaSourceSuccessCB():void {
    easyrtc.setVideoObjectSrc(document.getElementById("local-video"), easyrtc.getLocalStream());
    let connectSuccessCBShim = (easyrtcid:string) => {
      this.connectSuccessCB(easyrtcid);
    }
    let connectFailureCBShim = (errorCode:string, message:string) => {
      this.connectFailureCB(errorCode, message);
    }
    easyrtc.connect("easyrtc.videoOnly", connectSuccessCBShim, connectFailureCBShim);
  }

  setStreamAcceptorCB(easyrtcid:string, stream:any):void {
    easyrtc.setVideoObjectSrc(document.getElementById("remote-video"), stream);
    console.log("saw video from " + easyrtcid);
    this.template.hangupButton.disabled = false;
    this.cdr.detectChanges();
  }

  setAcceptCheckerCB(easyrtcid:string, callback:() => any):void {
    this.template.acceptCallBox.display = "block";
    this.cdr.detectChanges();
    if( easyrtc.getConnectionCount() > 0 ) {
      this.template.acceptCallLabel.innerHTML = "Drop current call and accept new from " + easyrtc.idToName(easyrtcid) + " ?";
    }
    else {
      this.template.acceptCallLabel.innerHTML = "Accept incoming call from " + easyrtc.idToName(easyrtcid) +  " ?";
    }
    document.getElementById("callAcceptButton").onclick = this.callHandleBuilder(true, callback);
    document.getElementById("callRejectButton").onclick = this.callHandleBuilder(false, callback);
  }

  setOnStreamClosedCB(easyrtcid:string):void {
    easyrtc.setVideoObjectSrc(document.getElementById("remote-video"), "");
    this.template.hangupButton.disabled = true;
    this.viewState = "";
    this.cdr.detectChanges();
  }

  connect():void {
    easyrtc.setSocketUrl(":8080");
    easyrtc.enableDebug(false);
    console.log("Initializing.");
    easyrtc.enableAudio(false);
    easyrtc.enableAudioReceive(false);
    easyrtc.setStreamAcceptor(
      (easyrtcid, stream) => {
        this.setStreamAcceptorCB(easyrtcid, stream);
      }
    );
    easyrtc.setOnStreamClosed(
      (easyrtcid) => {
        this.setOnStreamClosedCB(easyrtcid);
      }
    );
    easyrtc.setAcceptChecker(
      (easyrtcid, callback) => {
        this.setAcceptCheckerCB(easyrtcid, callback);
      }
    );
    let convertListToButtonShim = (roomName:string, data:Easyrtc_PerRoomData, isPrimary:boolean):void => {
      this.convertListToButtons(roomName, data, isPrimary);
    }
    easyrtc.setRoomOccupantListener(convertListToButtonShim);
    let initMediaSourceSuccessCBShim = () => {
      this.initMediaSourceSuccessCB();
    }
    easyrtc.initMediaSource(initMediaSourceSuccessCBShim);
  }

  disconnect() {
    easyrtc.disconnect();
    console.log("disconnecting from server");
    this.template.connectButton.disabled = false;
    this.clearConnectionList();
    easyrtc.setVideoObjectSrc(document.getElementById("local-video"), "");
    easyrtc.closeLocalMediaStream();
    this.videoChatService.closeVideoFrame();
  }

  callSuccessCB():void {
    this.viewState = "active";
  }

  callFailureCB():void {
    this.template.hangupButton.disabled = true;
    this.template.callButton.disabled = false;
  }

  callAcceptedCB(accepted:boolean, easyrtcid:string):void {
    if ( !accepted ) {
      easyrtc.showError("CALL-REJECTED", "Sorry, your call to " + easyrtc.idToName(easyrtcid) + " was rejected");
      this.template.callButton.disabled = false;
    }
  }

  callHandleBuilder(wasAccepted:boolean, callback:(wasAccepted:boolean) => any):(() => void ) {
    return ():void => {
      this.template.acceptCallBox.display = "none";
      if( wasAccepted && easyrtc.getConnectionCount() > 0 ) {
        easyrtc.hangupAll();
      }
      callback(wasAccepted)
      if (wasAccepted) {
        this.viewState = "active";
      }
    }
  }

  call() {
    var otherEasyrtcid = this.connectedClientsList[0];
    this.remoteEasyRTCId = otherEasyrtcid;
    easyrtc.hangupAll();
    easyrtc.call(
      otherEasyrtcid,
      () => {
        this.callSuccessCB();
      },
      () => {
        this.callFailureCB();
      },
      (accepted, otherEasyrtcid) => {
        this.callAcceptedCB(accepted, otherEasyrtcid);
      }
    );
  }

  hangup() {
    console.log("hangup all");
    easyrtc.hangupAll();
    this.template.hangupButton.disabled = true;
  }

  clearConnectionList():void {
    this.connectedClientsList = [];
    this.cdr.detectChanges();
  }

  convertListToButtons(roomName:string, data:Easyrtc_PerRoomData, isPrimary:boolean):void {
    this.clearConnectionList();
    for(let easyrtcid in data) {
      this.connectedClientsList.push(easyrtc.idToName(easyrtcid));
    }
    this.cdr.detectChanges();
  }

  updateMyEasyRTCId(myEasyRTCid:string):void {
    this.myEasyRTCid = myEasyRTCid;
    this.cdr.detectChanges();
  }

  // canDeactivate function seems to be does not calling from CanDeactivateGuard
  canDeactivate() {
    console.log("DEACTIVATING")
    easyrtc.disconnect();
    return true;
  }
}
