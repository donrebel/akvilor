import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'chat-video-room',
  templateUrl: 'chat-video-room.component.html',
  styleUrls: ['chat-video-room.component.css']
})

export class ChatVideoRoomComponent implements OnInit{
  private selfEasyrtcid = "";

  constructor() {

  }

  ngOnInit() {
    easyrtc.setSocketUrl(":8080");
    easyrtc.setVideoDims(640,480);
    easyrtc.setRoomOccupantListener(this.convertListToButtons);
    easyrtc.easyApp("easyrtc.audioVideoSimple", "selfVideo", ["callerVideo"], this.loginSuccess, this.loginFailure);
  }

  clearConnectList() {
      var otherClientDiv = document.getElementById('otherClients');
      while (otherClientDiv.hasChildNodes()) {
          otherClientDiv.removeChild(otherClientDiv.lastChild);
      }
  }

  convertListToButtons (roomName, data, isPrimary) {
    this.clearConnectList();
    var otherClientDiv = document.getElementById('otherClients');
    for(var easyrtcid in data) {
        var button = document.createElement('button');
        button.onclick = function(easyrtcid) {
            return function() {
                this.performCall(easyrtcid);
            };
        }(easyrtcid);

        var label = document.createTextNode(easyrtc.idToName(easyrtcid));
        button.appendChild(label);
        otherClientDiv.appendChild(button);
    }
  }

  performCall(otherEasyrtcid) {
      easyrtc.hangupAll();

      var successCB = function() {};
      var failureCB = function() {};
      easyrtc.call(otherEasyrtcid, successCB, failureCB);
  }


  loginSuccess(easyrtcid) {
      this.selfEasyrtcid = easyrtcid;
      document.getElementById("iam").innerHTML = "I am " + easyrtc.cleanId(easyrtcid);
  }


  loginFailure(errorCode, message) {
      easyrtc.showError(errorCode, message);
  }

}
