import { Component } from '@angular/core';

declare var adapter: any;

@Component({
  moduleId: module.id,
  selector: 'chat-room',
  templateUrl: 'chat-room.component.html',
  styleUrls: ['chat-room.component.css']
})
export class ChatRoomComponent {

  constructor(){
    console.log('chat-room');
  }
  // constructor(sce, VideoStream, location, routeParams, Room) {
  //   if (!(window as any).RTCPeerConnection  || !navigator.getUserMedia) {
  //     console.log('WebRTC is not supported by your browser. You can try the app with Chrome and Firefox.')
  //   }
  //   console.log('good');
  // }

}
