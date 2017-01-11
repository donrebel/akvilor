import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'chat-video-room',
  templateUrl: 'chat-video-room.component.html',
  styleUrls: ['chat-video-room.component.css']
})

export class ChatVideoRoomComponent implements OnInit{
  private selfEasyrtcid = "";
  private videoMode = '';
  private videoModeToggle = false;


  constructor() {

  }

  ngOnInit() {
    easyrtc.setSocketUrl(":8080");
    easyrtc.setVideoDims(640,480);
    easyrtc.setRoomOccupantListener(this.convertListToButtons.bind(this));
    easyrtc.easyApp("easyrtc.audioVideoSimple", "local-video", ["remote-video"], this.loginSuccess.bind(this), this.loginFailure);
  }

  clearConnectList() {
      var otherClientDiv = document.getElementById('otherClients');
      while (otherClientDiv.hasChildNodes()) {
          otherClientDiv.removeChild(otherClientDiv.lastChild);
      }
  }

  convertListToButtons (roomName, data, isPrimary) {
    console.log(roomName);
    console.log(data);
    console.log(isPrimary);
    var component = this;
    this.clearConnectList();
    var otherClientDiv = document.getElementById('otherClients');
    for(var easyrtcid in data) {
        var button = document.createElement('button');
        button.onclick = function(easyrtcid, component) {
            return function() {
                component.performCall(easyrtcid);
            };
        }(easyrtcid, component);

        var label = document.createTextNode(easyrtc.idToName(easyrtcid));
        button.appendChild(label);
        otherClientDiv.appendChild(button);
    }
  }

  performCall = (otherEasyrtcid) => {
      easyrtc.hangupAll();

      var successCB = function() {};
      var failureCB = function() {};
      console.log(otherEasyrtcid);
      easyrtc.call(otherEasyrtcid, successCB, failureCB);
  }


  loginSuccess(easyrtcid) {
      this.selfEasyrtcid = easyrtcid;
      // console.log(easyrtcid);
      // console.log(easyrtc.cleanId(easyrtcid));
      document.getElementById("iam").innerHTML = "I am " + easyrtc.cleanId(easyrtcid);
  }

  loginFailure(errorCode, message) {
      easyrtc.showError(errorCode, message);
  }

  activate(element) {
	  element.classList.add('active');
	}

  changeMode() {
      this.videoModeToggle = !this.videoModeToggle;
      this.videoMode = this.videoModeToggle ? "active": "";
  }

}
