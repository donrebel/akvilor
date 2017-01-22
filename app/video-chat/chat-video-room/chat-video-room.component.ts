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

  }

  clearConnectionList():void {
    this.connectedClientsList = [];
    this.cdr.detectChanges();
  }

  // performCall = (otherEasyrtcid:string):void => {
  //      easyrtc.hangupAll();
  //      let successCB = function() {
  //        this.viewState = "active";
  //        console.log(otherEasyrtcid);
  //      };
  //      var failureCB = function() {};
  //      easyrtc.call(otherEasyrtcid, successCB.bind(this), failureCB);
  // }

  buildCaller(easyrtcid:string):(() => void) {
    return ():void => {
      this.performCall(easyrtcid);
    }
  }



  easyrtcCallSuccessCB():void {
    this.template.hangupButton.disabled = false;
    this.viewState = "active";
  }

  easyrtcCallFailureCB():void {
    this.template.hangupButton.disabled = true;
    this.template.callButton.disabled = false;
  }

  easyrtcCallAcceptedCB(accepted:boolean, easyrtcid:string):void {
    if ( !accepted ) {
      easyrtc.showError("CALL-REJECTED", "Sorry, your call to " + easyrtc.idToName(easyrtcid) + " was rejected");
      this.template.callButton.disabled = false;
    }
  }

  performCall(otherEasyrtcid:string) {
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
    easyrtc.call(
      otherEasyrtcid,
      () => {
        this.easyrtcCallSuccessCB();
      },
      () => {
        this.easyrtcCallFailureCB();
      },
      (accepted, easyrtcid) => {
        this.easyrtcCallAcceptedCB(accepted, easyrtcid);
      }
    );
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

  // loginSuccess(easyrtcid:string):void {
  //   this.updateMyEasyRTCId(easyrtc.cleanId(easyrtcid));
  //   this.template.connectButton.disabled = true;
  //   // enable("disconnectButton");
  //   //this.enable("otherClients");
  // }

  // loginFailure(errorCode:string, message:string):void {
  //   this.updateMyEasyRTCId('Login failed. Reason: ' + message);
  // }



  easyrtcConnectSuccessCB(easyrtcid:string):void {
    this.updateMyEasyRTCId(easyrtc.cleanId(easyrtcid));
    this.template.connectButton.disabled = true;
    this.template.callButton.disabled = false;
    this.template.disconnectButton.disabled = false;
  }

  easyrtcConnectFailureCB(errorCode:string, message:string):void {
    easyrtc.showError(errorCode, message);
  }

  initMediaSourceSuccessCB():void {
    easyrtc.setVideoObjectSrc(document.getElementById("local-video"), easyrtc.getLocalStream());
    let easyrtcConnectSuccessCBShim = (easyrtcid:string) => {
      this.easyrtcConnectSuccessCB(easyrtcid);
    }
    let easyrtcConnectFailureCBShim = (errorCode:string, message:string) => {
      this.easyrtcConnectFailureCB(errorCode, message);
    }
    easyrtc.connect("easyrtc.videoOnly", easyrtcConnectSuccessCBShim, easyrtcConnectFailureCBShim);
  }

  connect():void {
    easyrtc.setSocketUrl(":8080");
    easyrtc.enableDebug(false);
    console.log("Initializing.");
    easyrtc.enableAudio(false);
    easyrtc.enableAudioReceive(false);
    let convertListToButtonShim = (roomName:string, data:Easyrtc_PerRoomData, isPrimary:boolean):void => {
      this.convertListToButtons(roomName, data, isPrimary);
    }
    easyrtc.setRoomOccupantListener(convertListToButtonShim);
    let initMediaSourceSuccessCBShim = () => {
      this.initMediaSourceSuccessCB();
    }
    easyrtc.initMediaSource(initMediaSourceSuccessCBShim);
  }

  ngOnInit() {
    this.connect();
  }

  hangup():void {
    easyrtc.hangupAll();
    this.template.hangupButton.disabled = true;
  }


  disconnect() {
    easyrtc.disconnect();
    console.log("disconnecting from server");
    this.template.connectButton.disabled = false;
    this.clearConnectionList();
    easyrtc.setVideoObjectSrc(document.getElementById("local-video"), "");
    this.videoChatService.closeVideoFrame();
  }

  // canDeactivate function seems to be does not calling from CanDeactivateGuard
  canDeactivate() {
    console.log("DEACTIVATING")
    easyrtc.disconnect();
    return true;
  }

}
